import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CalendarPicker from './../../CalendarPicker';

const App = () => {
  const [startDate, setStartDate] = useState(null);

  const onDateChange = useCallback(date => {
    setStartDate(date);
  }, []);

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange} />

      <View>
        <Text>SELECTED DATE:{startDate ? startDate.toString() : null}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});

export default App;
