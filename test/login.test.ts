import LirbusClient from '../src/index';
import CredentialsStore from '../src/util/credentials';

test('Authorization', () => {
    const client = new LirbusClient(new CredentialsStore('login', 'pass'));
    expect(client).toBeInstanceOf(LirbusClient);
});
