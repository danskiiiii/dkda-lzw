import { SelectInput, TextInput } from './common';

import React from 'react';

export default class LZW extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      dictionary: [],
      code: [],
      decodedDict: [],
      step: 1,
      slowMode: 0,
      initialDictInput: '',
      initialText: '',
      initialError: false,
      disableActions: false,
      shouldDecode: true,
      isDecoding: false,
      decodedSentence: '',
      joinedText: '',
    };

    this.state = this.initialState;
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
    const { initialDictInput, dictionary } = this.state;

    if (initialDictInput && !dictionary.some(w => w === initialDictInput)) {
      this.setState(
        prevState => ({
          dictionary: [...prevState.dictionary, initialDictInput],
          initialDictInput: '',
        }),
        () => this.dictInput.focus()
      );
    }
  };

  handleStart = () => {
    const { initialText, dictionary } = this.state;

    if (!initialText.length) {
      this.setState({ initialError: true });
      return;
    }

    const joinedText = initialText.split(' ').join('-');

    this.setState({ joinedText, disableActions: true, decodedDict: dictionary }, this.encodeLoop);
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

  prepareDecode = () => {
    const { shouldDecode } = this.state;
    if (shouldDecode) {
      window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' });
      this.setState({ isDecoding: true }, this.decodeLoop);
    }
  };

  decodeLoop = () => {
    const { code, step, slowMode } = this.state;

    setTimeout(() => {}, step * 100 + 500 * Number(slowMode));

    if (step < code.length + 1) {
      setTimeout(() => {
        this.setState(prevState => {
          let newEntry = prevState.decodedDict[code[step - 1]];

          if (typeof newEntry === 'undefined') {
            newEntry = prevState.decodedDict[code[step - 2]].concat(prevState.decodedDict[code[step - 2]][0]);
          }

          return {
            decodedDict:
              step > 1
                ? [...prevState.decodedDict, prevState.decodedDict[code[step - 2]].concat(newEntry[0])]
                : prevState.decodedDict,
            decodedSentence: prevState.decodedSentence.concat(newEntry),
            step: prevState.step + 1,
          };
        });
      }, step * 100 + 500 + 500 * Number(slowMode));

      setTimeout(() => {
        window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' });
        this.decodeLoop();
      }, step * 100 + 1000 + 500 * Number(slowMode));
    }
  };

  encodeLoop = () => {
    const { dictionary, joinedText, step, slowMode } = this.state;

    let nextWord = '';
    nextWord = this.findNext(joinedText, dictionary);

    if (!nextWord) {
      this.setState({ step: 1, disableActions: false });
      return;
    }

    setTimeout(() => {}, step * 100 + 500 * Number(slowMode));

    setTimeout(() => {
      this.setState(prevState => {
        let codeElementTxt =
          prevState.joinedText.length > nextWord.length ? nextWord.slice(0, nextWord.length - 1) : nextWord;
        let codeElement = prevState.dictionary.indexOf(codeElementTxt);
        let last = '';
        let lastIndex = -1;
        if (codeElement === -1) {
          let i = 0;
          while (codeElement === -1) {
            i++;
            codeElement = prevState.dictionary.indexOf(codeElementTxt.slice(0, codeElementTxt.length - i));
          }
          last = prevState.joinedText.slice(-1 * i);
          lastIndex = prevState.dictionary.indexOf(last);
        }
        return {
          joinedText: prevState.joinedText.substr(nextWord.length - 1, prevState.joinedText.length),
          code: last.length ? [...prevState.code, codeElement, lastIndex] : [...prevState.code, codeElement],
          dictionary: !prevState.dictionary.some(w => w === nextWord)
            ? [...prevState.dictionary, nextWord]
            : prevState.dictionary,
        };
      });
    }, step * 100 + 500 + 500 * Number(slowMode));

    setTimeout(() => {
      this.setState(prevState => ({ step: prevState.step + 1 }));

      if (this.state.joinedText.length > 1) {
        window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' });
        this.encodeLoop();
      } else {
        this.setState({ step: 1, disableActions: false, joinedText: 'SŁOWNIK KOŃCOWY:' }, this.prepareDecode);
      }
    }, step * 100 + 1000 + 500 * Number(slowMode));
  };

  render() {
    const {
      code,
      decodedDict,
      isDecoding,
      decodedSentence,
      dictionary,
      disableActions,
      initialDictInput,
      initialText,
      initialError,
      joinedText,
      slowMode,
      shouldDecode,
    } = this.state;
    return (
      <div className="wrapper">
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

        <div className="form-check" style={{ marginBottom: 40 }}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={shouldDecode}
            id="decodeCheck"
            onChange={() => this.setState(prev => ({ shouldDecode: !prev.shouldDecode }))}
            style={{ width: 20, height: 20, marginTop: 10 }}
          />
          <label className="form-check-label" style={{ marginLeft: 10 }} htmlFor="decodeCheck">
            Dekoduj po zakończeniu
          </label>
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
            onClick={() => this.setState(this.initialState)}>
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
            onClick={() => this.setState(this.initialState)}>
            <i className="fa fa-trash fa-lg" aria-hidden="true" />
          </button>
        </div>

        {!shouldDecode && <h2>{code.join(', ')}</h2>}

        <h3>{joinedText}</h3>

        <div className="dictionary">
          {dictionary.map((item, idx) => (
            <p className="word" key={idx}>{`${idx} = ${item}`}</p>
          ))}
        </div>

        {shouldDecode && (
          <>
            <h2 style={{ marginTop: 30 }}>{code.join(', ')}</h2>

            {isDecoding && (
              <>
                <h3 style={{ color: 'orange' }}>{decodedSentence}</h3>
                <div className="dictionary">
                  {decodedDict.map((item, idx) => (
                    <p className="word" key={idx}>{`${idx} = ${item}`}</p>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}
