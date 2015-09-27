import React from 'react';
import TopicActions from 'actions/TopicActions';
import TopicTextInput from 'components/TopicTextInput';
import styles from 'scss/components/_entrybox';

export default class EntryBox extends React.Component {
  /**
   * Event handler called within TopicTextInput.
   * Defining this here allows TopicTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */

   constructor(prop, context) {
    super(prop, context);
    this.state = {
      organization: null,
      organizationEmail: null,
      situation: null,
      userName: null,
      userEmail: null,
      imgUrl: ''
    };
    this._onSave = this._onSave.bind(this);
   }

  // _onSave = (text) => {
  //   TopicActions.create(text);
  // }

  _onChangeOrg = (text) => {
    this.setState({organization: text});
  }

  _onChangeOrgEmail = (text) => {
    this.setState({organizationEmail: text});
  }

  _onChangeSituation = (text) => {
    this.setState({situation: text});
  }

  _onChangeName = (text) => {
    this.setState({userName: text});
  }

  _onChangeEmail = (text) => {
    const defaultImg = 'http://www.ucarecdn.com/85d7241a-2aba-4c2b-940f-ac13b2949294/angrytextemoticonlargec42270.png';
    const imgUrl = React.findDOMNode(this.refs.uploadcare).value;
    this.setState({userEmail: text, imgUrl: imgUrl ? defaultImg : imgUrl });
  }

   _onChangeUrl = (text) => {
    this.setState({url: text});
  }

  _onSave() {
    TopicActions.create(this.state);
    this.setState({
      organization: null,
      url: null,
      organizationEmail: null,
      situation: null,
      userName: null,
      userEmail: null,
      imgUrl: null
    });
    alert('感謝！我們已寄出確認信件,請按信內網址確認提案');
  }

  render() {
    let buttonStyle = {width: '150px', backgroundColor: 'grey', borderRadius: '10px', height: '50px', marginLeft: '45%', marginTop: '30px', color: 'white', cursor: 'pointer', fontSize: '20px'};
    return (
      <div className={styles.entrybox}>
        <h1 className={styles.entrybox__header}>報案區</h1>
        <TopicTextInput className={styles.entrybox__input} value={this.state.organization} placeholder="案發機構全名 (比如: US Food and Drug...)" onChange={this._onChangeOrg} />
        <TopicTextInput className={styles.entrybox__input} value={this.state.url} placeholder="案發現場 (網址)" onChange={this._onChangeUrl} />
         <div style={{marginTop: '30px', marginBotton: '30px', marginLeft: '25%', fontSize: '30px'}}>
          <span>上傳螢幕截圖</span> <input type="hidden" name="picture" role="uploadcare-uploader" ref="uploadcare" />
        </div>
        <TopicTextInput className={styles.entrybox__input} value={this.state.organizationEmail} placeholder="案發機構負責人信箱 (若不知請留空)" onChange={this._onChangeOrgEmail} />
        <TopicTextInput className={styles.entrybox__input} value={this.state.situation} placeholder="案發情況 (比如: 學校申請表)" onChange={this._onChangeSituation} />
        <TopicTextInput className={styles.entrybox__input} value={this.state.userName} placeholder="通報人名 (必填)" onChange={this._onChangeName} />
        <TopicTextInput className={styles.entrybox__input} value={this.state.userEmail} placeholder="通報人信箱 (必填)" onChange={this._onChangeEmail} />
        <button style={buttonStyle} onClick={this._onSave}> 提案 </button>
      </div>
    );
  }
}

EntryBox.propTypes = { topic: React.PropTypes.string };
