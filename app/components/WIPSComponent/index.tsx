import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from '@app/ui/components/Container';
import { Text } from '@app/ui/components/Text';
// import { useDispatch } from 'react-redux';

// import {
//   getExampleEntitiesSelector,
//   getExampleIdsSelector,
// } from '@app/store/example/selectors';
// import { addTodo } from '@app/store/example/slice';

const WIPComponent = () => {
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
    <Container component={ScrollView}>
      <Text fontSize={14} fontWeight="thin">
        RNTemplate
      </Text>
    </Container>
  );
};

export default WIPComponent;
