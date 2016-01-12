'use strict';

describe('Review Controllers', function(){

	beforeEach(module('reviewControllers'));

	describe('MyData', function() {
		it('Should be an empty string when app start.', inject(function (MyData) {
			expect(MyData).toEqual({imagesReviewed: []});
		}))
	});


describe('Test fetch image', function() {
    it('should convert json response into image objects' ,function() {
        browser.addMockModule('httpBackendMock',
        function() {
            angular.module('httpBackendMock',
           ['mainApp', 'ngMockE2E'])
            .run(function($httpBackend) {
                $httpBackend.whenGET('/results').respond('raoul');    
            });
        });

        browser.get('/');
        var result = element(by.binding('result'));
        expect(result.getText()).toEqual('raoul');
    });
});


});