import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import classes from './MoviesSchedule.module.scss';

import { mockScreenType } from '../../../../../mock-data';

const MoviesSchedule = () => {
  const [choosenScreenTypes, setChoosenScreenTypes] = useState([]);

  useEffect(() => {
    setChoosenScreenTypes(
      Array.from(mockScreenType, (screenType) => (screenType.id))
    );
    }, []
  );

  const isChoosenScreenType = (screenType) => {
    return choosenScreenTypes.findIndex(choosen => choosen === screenType.id) > -1;
  }

  const isAllScreenTypesChoosen = () => {
    return choosenScreenTypes.length === mockScreenType.length;
  }

  const onScreenTypeButtonClick = (screenType) => {
    if (isChoosenScreenType(screenType)) {
      if (choosenScreenTypes.length <= 1) {
        return;
      }
      setChoosenScreenTypes(choosenScreenTypes.filter(choosen => choosen !== screenType.id));
    }
    else {
      setChoosenScreenTypes([ ...choosenScreenTypes, screenType.id ]);
    }
  }

  const onAllScreenTypeClick = () => {
    setChoosenScreenTypes(
      Array.from(mockScreenType, (screenType) => (screenType.id))
    );
  }

  const renderScreenTypeButton = (screenType) => {
    return (
      <div 
        className={ 
          isChoosenScreenType(screenType)
          ? classes['screen-type-button-active'] 
          : classes['screen-type-button']
        }
        onClick={onScreenTypeButtonClick.bind(this, screenType)}
      >{screenType.name}
      </div>
    );
  }
    
  const renderScreenTypes = (screenTypes) => {
    return (
      <div className={classes['screen-types']}>
      <div 
        className={ 
          isAllScreenTypesChoosen()
          ? classes['screen-type-button-active'] 
          : classes['screen-type-button']
        }
        onClick={onAllScreenTypeClick}
      >Tất cả
      </div>
        {screenTypes.map(screenType => (
          renderScreenTypeButton(screenType)
        ))}
      </div>
    );
  }

  return (
    <Container className={classes['container']}>
      <div className={classes['header']}>
        <div className={classes['big-text']}>
          Lịch chiếu
        </div>
        <div className={classes['fading-line']}></div>
        {renderScreenTypes(mockScreenType)}
      </div>
    </Container>
  );
}

export default MoviesSchedule;