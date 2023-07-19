import React from "react";
import BoardCard from "../../components/BoardCard";
import ManagementTeamCard from "../../components/ManagementTeamCard";
import { boardData } from "../../constants";

const ManagementTeamCardContainer = ({
  switchStep,
  showDetails,
  data = [],
  step,
  myShow,
}) => {
  return data.map((item) => (
    <ManagementTeamCard
      key={item.key}
      showStep={step}
      myShow={myShow}
      switchStep={switchStep}
      step={item.key}
      showDetails={showDetails}
      image={item.image}
      name={item.name}
      cert={item.cert}
      role={item.role}
    />
  ));
};

export default ManagementTeamCardContainer;
