import React from 'react';
import {
  IntroductionIllustration,
  ProcessIllustration,
  AgileIllustration,
  RequirementsIllustration,
  UMLIllustration,
  ArchitectureIllustration,
  DesignPatternIllustration,
  TestingIllustration,
  EvolutionIllustration,
  SecurityIllustration,
  QualityIllustration,
  ProjectManagementIllustration,
  GitIllustration,
  UTSIllustration,
  UASIllustration,
  ReuseIllustration
} from './Illustrations';

interface IllustrationRendererProps {
  meetingId: number;
}

const IllustrationRenderer: React.FC<IllustrationRendererProps> = ({ meetingId }) => {
  const illustrations: { [key: number]: React.ReactNode } = {
    1: <IntroductionIllustration />,
    2: <ProcessIllustration />,
    3: <AgileIllustration />,
    4: <RequirementsIllustration />,
    5: <UMLIllustration />,
    6: <ArchitectureIllustration />,
    7: <DesignPatternIllustration />,
    8: <UTSIllustration />,
    9: <TestingIllustration />,
    10: <EvolutionIllustration />,
    11: <ReuseIllustration />,
    12: <SecurityIllustration />,
    13: <QualityIllustration />,
    14: <ProjectManagementIllustration />,
    15: <GitIllustration />,
    16: <UASIllustration />
  };

  return (
    <div className="my-6 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex justify-center">
        {illustrations[meetingId] || <IntroductionIllustration />}
      </div>
    </div>
  );
};

export default IllustrationRenderer;
