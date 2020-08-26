exports.handler = async function(req) {

  return {
    "statusCode": 200,
    "headers": {
      "content-type":"text/html; charset=utf-8"
    },
    "body": '<h1>praise cage</h1>'
  }
}
