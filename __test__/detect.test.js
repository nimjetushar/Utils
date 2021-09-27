// /* eslint-disable max-len */
// import Detect from '../build/detect';

// describe('detect.js', () => {
//     let detect;

//     beforeEach(() => {
//         detect = new Detect();
//     });

//     it('should test detect.js chrome standard for windows', () => {
//         let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36';

//         let data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Windows');
//         expect(data.os.version).toStrictEqual('10.0');
//         expect(data.device.type).toStrictEqual('desktop');

//         ua = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Windows');
//         expect(data.os.version).toStrictEqual('10.0');
//         expect(data.device.type).toStrictEqual('desktop');

//         ua = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Windows');
//         expect(data.os.version).toStrictEqual('8.1');
//         expect(data.device.type).toStrictEqual('desktop');
//     });

//     it('should test detect.js chrome standard for MACOS', () => {
//         const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36';
//         const data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Mac');
//         expect(data.os.version).toStrictEqual('10.15');
//         expect(data.device.type).toStrictEqual('desktop');
//     });

//     it('should test detect.js chrome standard for Linux', () => {
//         const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36';
//         const data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('GNU/Linux');
//         expect(data.os.version).toStrictEqual('');
//         expect(data.device.type).toStrictEqual('desktop');
//     });

//     it('should test detect.js chrome standard for iOS', () => {
//         let ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1';
//         let data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile iOS');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('iOS');
//         expect(data.os.version).toStrictEqual('13.5');
//         expect(data.device.type).toStrictEqual('smartphone');
//         expect(data.device.brand).toStrictEqual('Apple');
//         expect(data.device.model).toStrictEqual('iPhone');

//         ua = 'Mozilla/5.0 (iPad; CPU OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile iOS');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('iOS');
//         expect(data.os.version).toStrictEqual('13.5');
//         expect(data.device.type).toStrictEqual('tablet');
//         expect(data.device.brand).toStrictEqual('Apple');
//         expect(data.device.model).toStrictEqual('iPad');

//         ua = 'Mozilla/5.0 (iPod; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile iOS');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('iOS');
//         expect(data.os.version).toStrictEqual('13.5');
//         expect(data.device.type).toStrictEqual('portable media player');
//         expect(data.device.brand).toStrictEqual('Apple');
//         expect(data.device.model).toStrictEqual('iPod Touch');
//     });

//     it('should test detect.js chrome standard for Android', () => {
//         let ua = 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.83 Mobile Safari/537.36';
//         let data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Android');
//         expect(data.os.version).toStrictEqual('10.0');
//         expect(data.device.type).toStrictEqual('smartphone');
//         expect(data.device.brand).toStrictEqual('');
//         expect(data.device.model).toStrictEqual('');

//         ua = 'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.83 Mobile Safari/537.36';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Android');
//         expect(data.os.version).toStrictEqual('10.0');
//         expect(data.device.type).toStrictEqual('smartphone');
//         expect(data.device.brand).toStrictEqual('Samsung');
//         expect(data.device.model).toStrictEqual('SM-A205U');

//         ua = 'Mozilla/5.0 (Linux; Android 10; SM-A102U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.83 Mobile Safari/537.36';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Android');
//         expect(data.os.version).toStrictEqual('10.0');
//         expect(data.device.type).toStrictEqual('smartphone');
//         expect(data.device.brand).toStrictEqual('Samsung');
//         expect(data.device.model).toStrictEqual('SM-A102U');

//         ua = 'Mozilla/5.0 (Linux; Android 10; SM-N960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.83 Mobile Safari/537.36';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Android');
//         expect(data.os.version).toStrictEqual('10.0');
//         expect(data.device.type).toStrictEqual('phablet');
//         expect(data.device.brand).toStrictEqual('Samsung');
//         expect(data.device.model).toStrictEqual('GALAXY Note 9');

//         ua = 'Mozilla/5.0 (Linux; Android 10; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.83 Mobile Safari/537.36';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Android');
//         expect(data.os.version).toStrictEqual('10.0');
//         expect(data.device.type).toStrictEqual('smartphone');
//         expect(data.device.brand).toStrictEqual('LG');
//         expect(data.device.model).toStrictEqual('Stylo 5');

//         ua = 'Mozilla/5.0 (Linux; Android 10; LM-X420) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.83 Mobile Safari/537.36';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Android');
//         expect(data.os.version).toStrictEqual('10.0');
//         expect(data.device.type).toStrictEqual('smartphone');
//         expect(data.device.brand).toStrictEqual('LG');
//         expect(data.device.model).toStrictEqual('K40');

//         ua = 'Mozilla/5.0 (Linux; Android 10; LM-Q710(FGN)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.83 Mobile Safari/537.36';
//         data = detect.parse(ua);
//         expect(data.client.name).toStrictEqual('Chrome Mobile');
//         expect(data.client.version).toStrictEqual('83.0');
//         expect(data.os.name).toStrictEqual('Android');
//         expect(data.os.version).toStrictEqual('10.0');
//         expect(data.device.type).toStrictEqual('smartphone');
//         expect(data.device.brand).toStrictEqual('LG');
//         expect(data.device.model).toStrictEqual('Q Stylus Plus');
//     });
// });
