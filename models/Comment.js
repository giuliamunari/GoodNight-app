import t from 'tcomb-form-native';

const Comment = t.struct({
    comment: t.String,
});

export const formOptions = {
    auto: 'placeholders',
    fields: {
        comment: {
          placeholder: 'Say something you are grateful for',
        }
      }
}

export default Comment;
