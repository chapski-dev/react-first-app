import React, {useCallback, useMemo, useState } from 'react'
import { CountersPage } from '.';
import './style.scss';



export const HookCounterContainer = () => {
  const [counterList, setCounterList] = useState([{counterValue: 0}]);

  // useMemo (used for static values)
  const totalCounters = useMemo(() => counterList.length, [counterList]);

  const totalValue = useMemo(() => {
    return counterList.reduce((initial, counter) => initial += counter.counterValue, 0);
  }, [counterList]);

  const handleIncrement = useCallback((index) => {
    const updatedState = counterList.map((counter, countIndex) => {
      if (countIndex === index) {
        counter.counterValue++;
      };
      return counter;
    });
    setCounterList(updatedState);
  }, [counterList]);

  const handleDecrement = useCallback((index) => {
      const updatedState = counterList.map((counter, countIndex) => {
        if (countIndex === index && counter.counterValue > 0) {
          counter.counterValue--;
        }
        return counter;
      });
      setCounterList(updatedState);
    }, [counterList]);
  const handleReset = useCallback((index) => {
    const updatedState = counterList.map((counter, countIndex) => {
      if (countIndex === index) {
        counter.counterValue = 0;
      };
      return counter;
    });
    setCounterList(updatedState);
  }, [counterList]);

  const handleRemoveCounter = useCallback((index) => {
      const stateCopy = [...counterList];
      stateCopy.splice(index, 1);
      setCounterList(stateCopy);
    }, [counterList]);

  const handleAddCounter = useCallback(() => {
      const stateCopy = [...counterList];
      stateCopy.push({counterValue: 0});
      setCounterList(stateCopy);
    },[counterList]);
  
  const handleDestroyCounters = useCallback(() => {
      const stateCopy = [...counterList];
      stateCopy.splice(0);
      setCounterList(stateCopy);
      // setCounterList([]) - равно тому же что на 3 строчки выше
    },[counterList]);

  return (
    <CountersPage
      counters={counterList}
      totalValue={totalValue}
      totalCounters={totalCounters}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleRemoveCounter={handleRemoveCounter}
      handleAddCounter={handleAddCounter}
      handleDestroyCounters={handleDestroyCounters}
    />
  );
};
