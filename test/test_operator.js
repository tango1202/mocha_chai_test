import { plus, minus } from '../src/operator.js'; // 테스트할 모듈
import { assert } from 'chai'; // chai 사용

 describe('테스트입니다', () => { // 테스트 범주
    it('plus() 테스트', () => { // 테스트케이스
        assert.equal(plus(1, 2), 3);
    })
    it('minus() 테스트', () => { // 테스트케이스
        assert.equal(minus(1, 2), -1);
    })
 });

