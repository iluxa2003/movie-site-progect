import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
const ActorPage = () => {
    const params = useParams();

  return (
    <div>
      <Header/>
      <main>
        {console.log(params)}
      </main>
    </div>
  );
};

export default ActorPage;