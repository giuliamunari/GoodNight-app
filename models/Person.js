import t from 'tcomb-form-native';

const Person = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
});

export default Person;