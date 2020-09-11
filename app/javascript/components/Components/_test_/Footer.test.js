import React, {Component} from 'react';
import {shallow} from 'enzyme';
import Footer from '../Footer.js'


describe('<Footer />', () => {
    it("should render teams copyright info of © 2020 Assemble", () => {
        //This creates a shallow copy of the Footer (shallows means that any child componenets, if any won't be created, just the Footer)
        const wrapper = shallow(<Footer />);
        //Find the p tag and saves the <p> tag and everything in the p tag to a variable to be referenced in the next line
        const p = wrapper.find("p");
        //Specifically pulls the text out of the <p> tag
        const result = p.text();
        //Now that you successfully isolatd what you are testing for, you can write your expect statement.
        expect(result).toBe(" © 2020 Assemble.");     
    })
})
