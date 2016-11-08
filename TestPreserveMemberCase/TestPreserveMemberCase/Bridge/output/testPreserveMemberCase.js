/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2016
 * @compiler Bridge.NET 15.3.0
 */
Bridge.assembly("TestPreserveMemberCase", function ($asm, globals) {
    "use strict";

    Bridge.define("TestPreserveMemberCase.App", {
        $main: function () {
            var obj = new TestPreserveMemberCase.App.Struct();
            var str = new TestPreserveMemberCase.App.Struct();
            Bridge.Console.log(obj.toString());
            Bridge.Console.log(str.ToString());

            Bridge.Console.log(obj.valueOf());
            Bridge.Console.log(str.ValueOf());

            Bridge.Console.log(Bridge.getHashCode(obj));
            Bridge.Console.log(str.GetHashCode());
        }
    });

    Bridge.define("TestPreserveMemberCase.App.Struct", {
        ToString: function () {
            return "Struct";
        },
        ValueOf: function () {
            return "ValueOf";
        },
        GetHashCode: function () {
            return 1;
        }
    });
});
