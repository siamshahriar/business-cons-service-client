import React from "react";
import useTitle from "../../../Hooks/useTitle";

const JWT = () => {
  useTitle("What is JWT, and how does it work?");
  return (
    <div className="pt-16">
      <div className="bg-slate-200 lg:px-14 mb-10 rounded-lg pb-10 max-w-screen-xl mx-auto">
        <h2 className="text-xl font-semibold text-center my-10 pt-8">
          What is JWT, and how does it work?
        </h2>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
          <br />
          <br />
          For beginning developers, JSON stands for JavaScript Object Notation
          and is a text-based format for transmitting data across web
          applications. It stores information in an easy-to-access manner, both
          for developers and computers. It can be used as a data format by any
          programming language and is quickly becoming the preferred syntax for
          APIs, surpassing XML.
          <br />
          <br />
          <span className="text-lg font-semibold ">Tokens:</span>
          <br />
          Now that you understand JSON as a data text format, you may be
          wondering What are tokens? To put it simply, a token is a string of
          data that represents something else, such as an identity. In the case
          of authentication, a non-JWT based token is a string of characters
          that allow the receiver to validate the sender’s identity. The
          important distinction here is lack of meaning within the characters
          themselves.
          <br />
          <br />
          <span className="text-lg font-semibold ">How JWT Works</span>
          <br />
          <br />
          A JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization, the JWT looks something like this:
          xxxxx.yyyyy.zzzzz.
          <br />
          Once decoded, you will get two JSON strings:
          <br />
          The header and the payload.
          <br />
          The signature.
          <br />
          <br />
          The JOSE (JSON Object Signing and Encryption) header contains the type
          of token — JWT in this case — and the signing algorithm.
          <br />
          The payload contains the claims. This is displayed as a JSON string,
          usually containing no more than a dozen fields to keep the JWT
          compact. This information is typically used by the server to verify
          that the user has permission to perform the action they are
          requesting.
          <br />
          There are no mandatory claims for a JWT, but overlaying standards may
          make claims mandatory. For example, when using JWT as bearer access
          token under OAuth2.0, iss, sub, aud, and exp must be present. some are
          more common than others.
          <br />
          The signature ensures that the token hasn’t been altered. The party
          that creates the JWT signs the header and payload with a secret that
          is known to both the issuer and receiver, or with a private key known
          only to the sender. When the token is used, the receiving party
          verifies that the header and payload match the signature.
        </p>
      </div>
    </div>
  );
};

export default JWT;
