const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

cns = {
    user: 'libreria',
    password: 'libreria',
    connectString: `localhost/XE`
}

const getConnection = () => {
    return oracledb.getConnection(cns);
}

async function Open(sql,binds,autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, {autoCommit});
    cnn.release();
    return result;
}



module.exports = {Open,getConnection};