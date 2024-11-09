"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
describe('omit', () => {
    it('should create a shallow copy', () => {
        const benjy = { name: 'Benjy' };
        const copy = (0, src_1.default)(benjy, []);
        expect(copy).toEqual(benjy);
    });
    it('should drop fields which are passed in', () => {
        const benjy = { name: 'Benjy', age: 18 };
        const target1 = (0, src_1.default)(benjy, ['age']);
        const target2 = (0, src_1.default)(benjy, ['age', 'name']);
        expect(target1).toEqual({ name: 'Benjy' });
        expect(target2).toEqual({});
    });
});
