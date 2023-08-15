import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import {Button, Menu, Snackbar, Text, TextInput} from 'react-native-paper';
import dayjs from 'dayjs';
import {useRecoilState} from 'recoil';
import Service from 'services';
import testState from 'store/test';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import tw from 'twrnc';

export default function User() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useRecoilState(testState);

  const {data} = useSWR({url: 'todos', params: {_limit: 10}});

  const {trigger} = useSWRMutation('todos', Service.post, {
    onSuccess: () => setVisible(!visible),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const handleChangeText = () => setText('New Text');

  const onSubmit = (formValues: any) => console.log(formValues);

  const handleDismissSnackBar = () => setVisible(false);

  const handleCreateTodo = () => {
    const values: any = {
      id: 3423423,
      title: 'test',
    };

    trigger(values);
  };

  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Button icon="camera" mode="contained" onPress={handleCreateTodo}>
          Press me
        </Button>

        <Text
          style={tw`mt-3 bg-yellow-500 font-bold text-xl py-3 text-red-600`}>
          {text} Today is {dayjs().format('YYYY-MM-DD HH:mm')}
        </Text>

        <Button icon="camera" mode="contained" onPress={handleChangeText}>
          Press me
        </Button>

        {data?.map((item: any) => (
          <Menu.Item key={item.id} leadingIcon="redo" title={item.title} />
        ))}
      </ScrollView>

      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />

        <Button mode="outlined" onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </View>

      <Snackbar
        visible={visible}
        onDismiss={handleDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! a Snackbar.
      </Snackbar>
    </View>
  );
}
