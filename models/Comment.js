import t from 'tcomb-form-native';
var _ = require('lodash');
// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// overriding the text color
stylesheet.textbox.normal.color = '#fff';

stylesheet.textbox.normal.borderColor = '#fff';
stylesheet.textbox.normal.marginRight=30,
stylesheet.textbox.normal.marginLeft=30

const Comment = t.struct({
    comment: t.String,
});

export const formOptions = {
    auto: 'placeholders',
    fields: {
        comment: {
          placeholder: 'Say something you are grateful for',
          stylesheet: stylesheet
        }
      }
}

export default Comment;
