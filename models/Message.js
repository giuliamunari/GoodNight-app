import t from 'tcomb-form-native';

const Message = t.struct({
    message: t.String,
});

export const formOptions = {
    auto: 'placeholders',
    fields: {
        message: {
          placeholder: 'How was your day?',
        }
      }
}

export default Message;
