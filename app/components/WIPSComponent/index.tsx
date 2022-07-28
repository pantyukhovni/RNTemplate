import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { useDispatch } from 'react-redux';

// import {
//   getExampleEntitiesSelector,
//   getExampleIdsSelector,
// } from '@app/store/example/selectors';
// import { addTodo } from '@app/store/example/slice';

function WIPComponent() {
  // const todosIds = useSelector(getExampleIdsSelector);
  // const todosEntitis = useSelector(getExampleEntitiesSelector);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     addTodo({
  //       todoId: '4545',
  //       text: 'COMPLETED',
  //       completed: false,
  //     }),
  //   );
  // }, []);

  return (
    <View style={styles.container}>
      <Text>RNTemplate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WIPComponent;
