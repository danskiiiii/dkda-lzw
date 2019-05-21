import { SelectInput, TextInput } from './common';

import { Link } from 'react-router-dom';
import React from 'react';

export default class LZW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: [],
      step: 1,
      slowMode: 0,
      initialDictInput: '',
      initialText: '',
      initialError: false,
      disableActions: false,
    };
  }

  handleKeyPress = evt => {
    const { target, which, keyCode } = evt;

    if (which === 13 || keyCode === 13) {
      switch (target.name) {
        case 'initialText':
          this.txtInput.blur();
          this.handleStart();
          break;

        case 'initialDictInput':
          this.handleCreateInitialDictionary();
          break;

        default:
          break;
      }
    }
  };

  handleChangeValue = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  handleCreateInitialDictionary = () => {
    const { initialDictInput } = this.state;

    this.setState(
      prevState => ({
        dictionary: [...prevState.dictionary, initialDictInput],
        initialDictInput: '',
      }),
      () => this.dictInput.focus()
    );
  };

  handleStart = () => {
    const { initialText } = this.state;

    if (!initialText.length) {
      this.setState({ initialError: true });
      return;
    }

    const joinedText = initialText.split(' ').join('-');

    this.setState({ joinedText, disableActions: true }, this.mainLoop);
  };

  findNext = (joinedText, dictionary) => {
    let sliceLength = 2;
    let next = '';
    while (true) {
      next = joinedText.slice(0, sliceLength);
      const needBiggerSlice = dictionary.some(word => word === next); //eslint-disable-line
      if (needBiggerSlice && !(next === joinedText)) {
        sliceLength++;
        next = '';
      } else {
        return next;
      }
    }
  };

  mainLoop = () => {
    const { dictionary, joinedText, step, slowMode } = this.state;

    let nextWord = '';
    nextWord = this.findNext(joinedText, dictionary);

    if (!nextWord) {
      this.setState({ step: 1, disableActions: false });
      return;
    }

    setTimeout(() => {}, step * 100 + 500 * Number(slowMode));

    setTimeout(() => {
      this.setState(prevState => ({
        joinedText: prevState.joinedText.substr(nextWord.length - 1, prevState.joinedText.length),

        dictionary: !prevState.dictionary.some(w => w === nextWord)
          ? [...prevState.dictionary, nextWord]
          : prevState.dictionary,
      }));
    }, step * 100 + 500 + 500 * Number(slowMode));

    setTimeout(() => {
      this.setState(prevState => ({ step: prevState.step + 1 }));

      if (this.state.joinedText.length > 1) {
        window.scroll({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
        this.mainLoop();
      } else {
        this.setState({ step: 1, disableActions: false, joinedText: 'SŁOWNIK KOŃCOWY:' });
      }
    }, step * 100 + 1000 + 500 * Number(slowMode));
  };

  render() {
    const {
      dictionary,
      disableActions,
      initialDictInput,
      initialText,
      initialError,
      joinedText,
      slowMode,
    } = this.state;
    return (
      <div className="wrapper">
        <Link to="/">
          <i className="fa fa-long-arrow-left fa-lg top-left" />
        </Link>

        <h1>Lempel–Ziv–Welch</h1>

        <div className="section slow">
          <p>Spowolnienie:&nbsp;</p>
          <SelectInput
            name="slowMode"
            options={[...Array(10).keys()]}
            value={slowMode}
            onChange={this.handleChangeValue}
          />
        </div>

        <div className="section">
          <TextInput
            inputRef={input => (this.dictInput = input)}
            formClassname="initial-dict"
            label="Stwórz słownik początkowy:"
            name="initialDictInput"
            maxLength={1}
            placeholder="Dodaj literę"
            value={initialDictInput}
            onChange={this.handleChangeValue}
            onKeyPress={this.handleKeyPress}
          />
          <button
            type="button"
            className="btn btn-success add"
            disabled={disableActions}
            onClick={this.handleCreateInitialDictionary}>
            Dodaj
          </button>
          <button
            type="button"
            className="btn btn-danger clean"
            disabled={disableActions}
            onClick={() => this.setState({ dictionary: [] })}>
            <i className="fa fa-trash fa-lg" aria-hidden="true" />
          </button>
        </div>

        <div className="section">
          <TextInput
            inputRef={input => (this.txtInput = input)}
            formClassname="initial-txt"
            hasError={initialError ? initialText.length === 0 : false}
            label="Tekst do zakodowania:"
            name="initialText"
            maxLength={100}
            placeholder="Wpisz tekst"
            value={initialText}
            onChange={this.handleChangeValue}
            onKeyPress={this.handleKeyPress}
          />
          <button type="button" className="btn btn-warning" disabled={disableActions} onClick={this.handleStart}>
            Rozpocznij
          </button>
          <button
            type="button"
            className="btn btn-danger clean"
            disabled={disableActions}
            onClick={() => this.setState({ initialText: '' })}>
            <i className="fa fa-trash fa-lg" aria-hidden="true" />
          </button>
        </div>

        <h3>{joinedText}</h3>

        <div className="dictionary">
          {dictionary.map((item, idx) => (
            <p className="word" key={idx}>{`${idx} = ${item}`}</p>
          ))}
        </div>
      </div>
    );
  }
}
