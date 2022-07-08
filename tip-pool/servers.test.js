describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create new tr element with two child tds on updateServerTable()', function() {
    submitServerInfo();
    updateServerTable();
    let serverTds = document.querySelectorAll('#serverTable tbody td');

    expect(serverTds[0].innerText).toEqual('Alice');
    expect(serverTds[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    allServers = {};
    serverId = 0;
    document.querySelector('#serverTable tbody').innerHTML = '';
  });
});