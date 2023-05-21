import React from "react";
import useTitle from "../../Hooks/UseTitle";
import { Player } from "@lottiefiles/react-lottie-player";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className='my-10 container mx-auto px-3 md:px-0'>
      <h2 className='mb-6 text-3xl text-center font-bold '>
        Let&apos;t Some FAQ
      </h2>
      <div className='grid md:grid-cols-2 items-center'>
        <div data-aos="fade-right">
          <div
            tabIndex={0}
            className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'
          >
            <div className='collapse-title text-xl font-medium'>
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </div>
            <div className='collapse-content'>
              <p>
                Access tokens are used to authenticate and authorize client
                applications, while refresh tokens enable the renewal of access
                tokens. Access tokens can be stored in memory or browser
                storage, while refresh tokens should be securely stored in an
                HTTP-only cookie on the client-side.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-3'
          >
            <div className='collapse-title text-xl font-medium'>
              Compare SQL and NoSQL databases?
            </div>
            <div className='collapse-content'>
              <p>
                SQL databases adhere to a predefined schema, organizing data
                into tables with fixed columns and rows. Relationships between
                tables are established through foreign keys. On the other hand,
                NoSQL databases have a flexible schema, supporting various data
                models such as key-value pairs, documents, graphs, or
                wide-column stores. They allow for dynamic and unstructured data
                without a fixed schema or relationships.
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-3'
          >
            <div className='collapse-title text-xl font-medium'>
              What is express js? What is Nest JS?
            </div>
            <div className='collapse-content'>
              <p>
                Express Js : Express.js is a lightweight and unopinionated web
                application framework for Node.js. It provides a minimalistic
                API that offers basic features such as routing and middleware.{" "}
              </p>
              <p className='mt-2'>
                Nest Js : Nest.js is a feature-rich and opinionated framework
                built on top of Express.js. Inspired by Angular, Nest.js
                promotes a structured and modular approach to building
                server-side applications with Node.js.
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-3'
          >
            <div className='collapse-title text-xl font-medium'>
              What is MongoDB aggregate and how does it work?
            </div>
            <div className='collapse-content'>
              <p>
                MongoDB's aggregate is a powerful framework that allows you to
                perform advanced data analysis and transformation operations on
                collections of documents within a MongoDB database.The aggregate
                pipeline consists of multiple stages that are executed
                sequentially. Each stage takes the input from the previous stage
                and produces an output that serves as the input for the next
                stage.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <Player
            autoplay
            loop
            src='https://assets10.lottiefiles.com/packages/lf20_eqNmg0L9I9.json'
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
