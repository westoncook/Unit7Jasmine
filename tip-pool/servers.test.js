describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should clear serverNameinput", function(){
    submitServerInfo();
    expect(serverNameInput.value).toEqual('');
  })

  afterEach(function() {
    serverTbody.innerHTML = ''
    allServers = {}
  })
})

describe("Test for updateServerTable", function(){
  beforeAll(function () {
    serverNameInput.value = 'Alice';
    submitServerInfo();
  });
  
  it('should clear existing server table before updating', function(){
    allServers = {};
    updateServerTable();
    expect(serverTbody.innerHTML).toEqual('');
  })
})
