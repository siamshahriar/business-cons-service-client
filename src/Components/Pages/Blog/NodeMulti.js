import React from "react";
import useTitle from "../../../Hooks/useTitle";

const NodeMulti = () => {
  useTitle("How does NodeJS handle multiple requests at the same time?");
  return (
    <div className="pt-16 px-10">
      <div className="bg-slate-800 px-6 lg:px-14 mb-10 rounded-lg pb-10 max-w-screen-xl mx-auto">
        <h2 className="text-xl font-semibold text-center my-10 pt-8">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          Given a NodeJS application, since Node is single threaded, say if
          processing involves a Promise.all that takes 8 seconds, does this mean
          that the client request that comes after this request would need to
          wait for eight seconds? <br /> <br />
          No. NodeJS event loop is single threaded. The entire server
          architecture for NodeJS is not single threaded. <br /> <br />
          Before getting into the Node server architecture, to take a look at
          typical multithreaded request response model, the web server would
          have multiple threads and when concurrent requests get to the
          webserver, the webserver picks threadOne from the threadPool and
          threadOne processes requestOne and responds to clientOne and when the
          second request comes in, the web server picks up the second thread
          from the threadPool and picks up requestTwo and processes it and
          responds to clientTwo. threadOne is responsible for all kinds of
          operations that requestOne demanded including doing any blocking IO
          operations. <br /> <br />
          The fact that the thread needs to wait for blocking IO operations is
          what makes it inefficient. With this kind of a model, the webserver is
          only able to serve as much requests as there are threads in the thread
          pool.
          <br /> <br />
          NodeJS Web Server maintains a limited Thread Pool to provide services
          to client requests. Multiple clients make multiple requests to the
          NodeJS server. NodeJS receives these requests and places them into the
          EventQueue . <br /> <br />
          NodeJS server has an internal component referred to as the EventLoop
          which is an infinite loop that receives requests and processes them.
          This EventLoop is single threaded. In other words, EventLoop is the
          listener for the EventQueue. So, we have an event queue where the
          requests are being placed and we have an event loop listening to these
          requests in the event queue. What happens next? The listener(the event
          loop) processes the request and if it is able to process the request
          without needing any blocking IO operations, then the event loop would
          itself process the request and sends the response back to the client
          by itself. <br /> <br />
          If the current request uses blocking IO operations, the event loop
          sees whether there are threads available in the thread pool, picks up
          one thread from the thread pool and assigns the particular request to
          the picked thread. That thread does the blocking IO operations and
          sends the response back to the event loop and once the response gets
          to the event loop, the event loop sends the response back to the
          client. <br /> <br />
          How is NodeJS better than traditional multithreaded request response
          model? With traditional multithreaded request/response model, every
          client gets a different thread where as with NodeJS, the simpler
          request are all handled directly by the EventLoop. This is an
          optimization of thread pool resources and there is no overhead of
          creating the threads for every client request.
        </p>
      </div>
    </div>
  );
};

export default NodeMulti;
