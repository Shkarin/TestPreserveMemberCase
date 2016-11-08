using System;
using System.Collections;
using Bridge;
using Bridge.Html5;

namespace TestPreserveMemberCase
{
	public class App
	{
		public class Struct
		{
			public override string ToString()
			{
				return "Struct";
			}

			public override object ValueOf()
			{
				return "ValueOf";
			}

			public override int GetHashCode()
			{
				return 1;
			}
		}

		public static void Main()
		{
			object obj = new Struct();
			var str = new Struct();
			Console.WriteLine(obj.ToString());
			Console.WriteLine(str.ToString());

			Console.WriteLine(obj.ValueOf());
			Console.WriteLine(str.ValueOf());

			Console.WriteLine(obj.GetHashCode());
			Console.WriteLine(str.GetHashCode());
		}
	}
}