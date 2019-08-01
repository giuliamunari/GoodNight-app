import t from 'tcomb-form-native';
var _ = require('lodash');
// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the text color
stylesheet.textbox.normal.color = '#fff';

stylesheet.textbox.normal.borderColor = '#fff';


const Message = t.struct({
    message: t.String,
});

export const formOptions = {
    auto: 'placeholders',
    fields: {
        message: {
          placeholder: 'How was your day?',
          stylesheet: stylesheet // overriding the style of the textbox
        }
      }
}

export default Message;
