import React from "react";

const JVNODE = () => {
  return (
    <div className="bg-slate-200 lg:px-14 mb-10 rounded-lg pb-10">
      <h2 className="text-xl font-semibold text-center my-10 pt-8">
        What is the difference between javascript and NodeJS?
      </h2>
      <p>
        <ol>
          <li className="my-4">
            JavaScript is a lightweight, cross-platform, interpreted scripting
            programming language that is primarily used for client-side
            scripting. It's built into both Java and HTML. On the other hand,
            Node.js is a server-side scripting language based on the Google
            Chrome V8 engine. As a result, it's used to build network-centric
            applications. It is a distributed system that is used for
            data-intensive real-time applications.
          </li>
          <li className="my-4">
            JavaScript is a simple programming language that could be run in any
            browser that supports the JavaScript Engine. On the other hand,
            Node.js is a running environment or interpreter for the JavaScript
            programming language. It needs libraries that may be easily accessed
            from JavaScript programming to make it more useful.
          </li>
          <li className="my-4">
            JavaScript can run on any engine, including Firefox's Spider Monkey,
            Safari's JavaScript Core, and V8 (Google Chrome). As a result,
            JavaScript programming is very simple to create, and any running
            environment is equivalent to a proper browser. On the other hand,
            Node.js only supports the V8 engine, which is exclusive to Google
            Chrome. However, written JavaScript code can run in any environment,
            regardless of whether it supports the V8 engine.
          </li>
          <li className="my-4">
            A particular non-blocking task is needed to access any operating
            system. There are some basic objects in JavaScript, but they are all
            os-specific. For example, ActiveX Control is a Windows-only
            application. However, Node.js is granted the ability to run
            non-blocking tasks unique to the operating system from any
            JavaScript programming. There are no os-specific constants in it.
            Node.js is well-versed in creating a clear binding with the file
            system, allowing the developer to read and write to disk.
          </li>
          <li className="my-4">
            For a single web application, JavaScript is typically used for any
            client-side operation. An operation may be dealing with business
            validation, dynamic page display at a set time interval, or a simple
            Ajax call. For any web application, these are used for a maximum
            amount of time. On the other hand, Node.js is generally used for
            non-blocking accessibility or execution of any operating system. On
            an operating system, a non-blocking operation involves generating or
            executing a shell script, retrieving unique hardware-related
            information in a single call, obtaining installed certificate
            details in the system, or performing a large number of specified
            tasks.
          </li>
          <li className="my-4">
            JavaScript's main advantages include a wide range of interfaces and
            interactivity and just the right amount of server contact and direct
            input to visitors. On the other hand, Node.js has a node package
            manager with over 500 modules and the ability to handle concurrent
            requests. It also has the special capability of supporting
            micro-service architecture as well as IoT.
          </li>
        </ol>
      </p>
    </div>
  );
};

export default JVNODE;
