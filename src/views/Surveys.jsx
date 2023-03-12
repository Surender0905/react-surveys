import { PlusCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import TButton from '../components/core/TButton';
import Pagecomponent from '../components/Pagecomponent';
import SurveyListItem from '../components/SurveyListItem';
import { useStateContext } from '../contexts/ContextProvider';

const Surveys = () => {
  const { surveys } = useStateContext();

  const onDeleteClick = (id) => {
    // if (window.confirm("Are you sure you want to delete this survey?")) {
    //   axiosClient.delete(`/survey/${id}`).then(() => {
    //     getSurveys();
    //     showToast('The survey was deleted');
    //   });
    // }
  };

  return (
    <Pagecomponent
      title="Surveys"
      buttons={
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" /> Create new
        </TButton>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {surveys &&
          surveys.map((survey) => (
            <SurveyListItem
              key={survey.id}
              survey={survey}
              onDeleteClick={onDeleteClick}
            />
          ))}
      </div>
    </Pagecomponent>
  );
};

export default Surveys;
