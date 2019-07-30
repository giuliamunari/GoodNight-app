import t from 'tcomb-form-native';

const Message = t.struct({
    comment: t.String,
});

export const formOptions = {
    auto: 'placeholders',
    fields: {
        comment: {
          placeholder: 'Your placeholder here',
        }
      }
}

export default Message;
