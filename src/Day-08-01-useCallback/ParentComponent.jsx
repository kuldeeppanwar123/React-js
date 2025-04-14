import React, { useCallback, useState } from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

export default function ParentComponent() {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(1000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary+1000)
  }, [salary])
  return (
    <>
    <Title/>
    <Count text="age" count={age}/>
    <Button handleClick = {incrementAge}>age +</Button>
    <Count text="salary" count = {salary} />
    <Button handleClick = {incrementSalary}>salary +</Button>
    </>
  )
}
