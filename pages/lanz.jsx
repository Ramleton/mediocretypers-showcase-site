import React from 'react';
import LanzIntro from './lanzintro';
import LanzSkills from './lanzskills';
import LanzGit from './lanzgit';
import LanzContact from './lanzcontact';

const lanz = () => (
    <div>
      <LanzIntro></LanzIntro>
      <LanzGit></LanzGit>
      <LanzSkills></LanzSkills>
      <LanzContact></LanzContact>
    </div>
);

export default lanz;