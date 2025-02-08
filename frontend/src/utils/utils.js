const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US");
};

module.exports = { formatTimestamp };
