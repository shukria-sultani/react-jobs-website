import React from "react";

export default function Hero({
  title = "Become a React Developer",
  subtitle = "Find the React jobs that fits your skils sets",
}) {
  return (
    <section className="bg-dark text-light p-5 text-center ">
      <div className="container p-5">
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
      </div>
    </section>
  );
}
