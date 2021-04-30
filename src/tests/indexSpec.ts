import supertest from "supertest";
import app from "../index";
import images from "../utilities/images";

const request = supertest(app);
describe('Test for endpoint requests and responses', () => {
    describe('Test endpoint responses', () => {
        it('gets the api endpoint', async (done) => {
            const response = await request.get('/api/images');
            expect(response.status).toBe(200);
            done();
        })
    })

    describe('Image transform function should resolve or reject', () => {
        it('expect transform function to resize file', async () => {
            const data = await images.transform('fjord.jpg');
            expect(data).toBe('./converted/fjord.jpg');
        })

        it('show error if file does not exist', async () => {
            const data = await images.transform('jord');
            expect(data).toBe('**Image does not exist**');
        })
    })
})