import React from "react";

export default function Hero({
  title = "Become a React Developer",
  subtitle = "Find the React jobs that fits your skils sets",
}) {
  return (
    <section className=" text-light p-5 text-center " style={{backgroundColor: "#d0ebf9"}}>
      <div className="container p-5">
        <h1 style={{color: "#8458B3"}}>{title}</h1>
        <p className="lead" style={{color: "#8458B3"}}>{subtitle}</p>
      </div>
    </section>
  );
}
