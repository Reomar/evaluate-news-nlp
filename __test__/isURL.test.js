import {isURL} from '../src/client/js/validateURL'


describe("Testing the URL validation function", () => {
        test("testing isURL() function with normal string should return false", ()=>{

                expect(isURL('Normal STRING')).toBeFalsy()
        })

        test("testing isURL() function with incomplete URL should return false", ()=> {
                expect(isURL('www.xda-developers/how-to-install-windows-10-may-2021-update/')).toBeFalsy()
        })

        test("testing isURL() function with valid URL should return true", ()=> {
                expect(isURL('https://www.xda-developers.com/how-to-install-windows-10-may-2021-update/')).toBeTruthy()
        })
})