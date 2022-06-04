/** @format */

const items = [
  { id: 1, name: "John" },
  { id: 2, name: "Andrew" },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello world",
  };
};
