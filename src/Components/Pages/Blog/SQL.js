import React from "react";

const SQL = () => {
  return (
    <div className="bg-slate-200 lg:px-14 mb-10 rounded-lg pb-10">
      <h2 className="text-xl font-semibold text-center my-10 pt-8">
        Difference between SQL and NoSQL
      </h2>
      <p>
        When it comes to choosing a database the biggest decisions is picking a
        relational (SQL) or non-relational (NoSQL) data structure. While both
        the databases are viable options still there are certain key differences
        between the two that users must keep in mind when making a decision.
        <br />
        <br />
        <span className="text-lg font-semibold ">The Main Differences:</span>
        <br />
        <br />
        <span className="text-lg font-semibold ">
          1. Type:
        </span> <span></span> <br />
        SQL databases are primarily called as Relational Databases (RDBMS);
        whereas NoSQL database are primarily called as non-relational or
        distributed database.
        <br />
        <br />
        <span className="text-lg font-semibold ">2. Language:</span>
        <br />
        SQL databases defines and manipulates data based structured query
        language (SQL). Seeing from a side this language is extremely powerful.
        SQL is one of the most versatile and widely-used options available which
        makes it a safe choice especially for great complex queries. But from
        other side it can be restrictive. SQL requires you to use predefined
        schemas to determine the structure of your data before you work with it.
        Also all of your data must follow the same structure. This can require
        significant up-front preparation which means that a change in the
        structure would be both difficult and disruptive to your whole system.
        <br />
        A NoSQL database has dynamic schema for unstructured data. Data is
        stored in many ways which means it can be document-oriented,
        column-oriented, graph-based or organized as a KeyValue store. This
        flexibility means that documents can be created without having defined
        structure first. Also each document can have its own unique structure.
        The syntax varies from database to database, and you can add fields as
        you go.
        <br />
        <br />
        <span className="text-lg font-semibold ">3. Scalability:</span> <br />
        In almost all situations SQL databases are vertically scalable. This
        means that you can increase the load on a single server by increasing
        things like RAM, CPU or SSD. But on the other hand NoSQL databases are
        horizontally scalable. This means that you handle more traffic by
        sharding, or adding more servers in your NoSQL database. It is similar
        to adding more floors to the same building versus adding more buildings
        to the neighborhood. Thus NoSQL can ultimately become larger and more
        powerful, making these databases the preferred choice for large or
        ever-changing data sets.
        <br />
        <br />
        <span className="text-lg font-semibold ">4. Structure:</span> <br />
        SQL databases are table-based on the other hand NoSQL databases are
        either key-value pairs, document-based, graph databases or wide-column
        stores. This makes relational SQL databases a better option for
        applications that require multi-row transactions such as an accounting
        system or for legacy systems that were built for a relational structure.
        <br />
        <br />
        <span className="text-lg font-semibold ">
          5. Property followed:
        </span>{" "}
        <br />
        SQL databases follow ACID properties (Atomicity, Consistency, Isolation
        and Durability) whereas the NoSQL database follows the Brewers CAP
        theorem (Consistency, Availability and Partition tolerance).
        <br />
        <br />
        <span className="text-lg font-semibold ">6. Support:</span> <br />
        Great support is available for all SQL database from their vendors. Also
        a lot of independent consultations are there who can help you with SQL
        database for a very large scale deployments but for some NoSQL database
        you still have to rely on community support and only limited outside
        experts are available for setting up and deploying your large scale
        NoSQL deployments.{" "}
      </p>
    </div>
  );
};

export default SQL;
