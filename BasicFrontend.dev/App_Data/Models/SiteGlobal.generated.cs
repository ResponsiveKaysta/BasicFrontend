//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.10.102
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	/// <summary>Site Global</summary>
	[PublishedContentModel("siteGlobal")]
	public partial class SiteGlobal : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "siteGlobal";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public SiteGlobal(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<SiteGlobal, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Email Destination Address
		///</summary>
		[ImplementPropertyType("emailDestinationAddress")]
		public string EmailDestinationAddress
		{
			get { return this.GetPropertyValue<string>("emailDestinationAddress"); }
		}

		///<summary>
		/// Email Display Text
		///</summary>
		[ImplementPropertyType("emailDisplayText")]
		public string EmailDisplayText
		{
			get { return this.GetPropertyValue<string>("emailDisplayText"); }
		}

		///<summary>
		/// Email From Address
		///</summary>
		[ImplementPropertyType("emailFromAddress")]
		public string EmailFromAddress
		{
			get { return this.GetPropertyValue<string>("emailFromAddress"); }
		}

		///<summary>
		/// Email Host
		///</summary>
		[ImplementPropertyType("emailHost")]
		public string EmailHost
		{
			get { return this.GetPropertyValue<string>("emailHost"); }
		}

		///<summary>
		/// Email Password
		///</summary>
		[ImplementPropertyType("emailPassword")]
		public string EmailPassword
		{
			get { return this.GetPropertyValue<string>("emailPassword"); }
		}

		///<summary>
		/// Email Subject
		///</summary>
		[ImplementPropertyType("emailSubject")]
		public string EmailSubject
		{
			get { return this.GetPropertyValue<string>("emailSubject"); }
		}

		///<summary>
		/// Email Username
		///</summary>
		[ImplementPropertyType("emailUsername")]
		public string EmailUsername
		{
			get { return this.GetPropertyValue<string>("emailUsername"); }
		}

		///<summary>
		/// Meta Audience
		///</summary>
		[ImplementPropertyType("metaAudience")]
		public string MetaAudience
		{
			get { return this.GetPropertyValue<string>("metaAudience"); }
		}

		///<summary>
		/// Meta Cache
		///</summary>
		[ImplementPropertyType("metaCache")]
		public string MetaCache
		{
			get { return this.GetPropertyValue<string>("metaCache"); }
		}

		///<summary>
		/// Meta Description
		///</summary>
		[ImplementPropertyType("metaDescription")]
		public string MetaDescription
		{
			get { return this.GetPropertyValue<string>("metaDescription"); }
		}

		///<summary>
		/// Meta Keywords
		///</summary>
		[ImplementPropertyType("metaKeywords")]
		public string MetaKeywords
		{
			get { return this.GetPropertyValue<string>("metaKeywords"); }
		}

		///<summary>
		/// Meta Page-Topic
		///</summary>
		[ImplementPropertyType("metaPageTopic")]
		public string MetaPageTopic
		{
			get { return this.GetPropertyValue<string>("metaPageTopic"); }
		}

		///<summary>
		/// Meta Pragma
		///</summary>
		[ImplementPropertyType("metaPragma")]
		public string MetaPragma
		{
			get { return this.GetPropertyValue<string>("metaPragma"); }
		}

		///<summary>
		/// Meta Revisit-After
		///</summary>
		[ImplementPropertyType("metaRevisitAfter")]
		public string MetaRevisitAfter
		{
			get { return this.GetPropertyValue<string>("metaRevisitAfter"); }
		}

		///<summary>
		/// Meta Robots
		///</summary>
		[ImplementPropertyType("metaRobots")]
		public string MetaRobots
		{
			get { return this.GetPropertyValue<string>("metaRobots"); }
		}

		///<summary>
		/// Site Author
		///</summary>
		[ImplementPropertyType("siteAuthor")]
		public string SiteAuthor
		{
			get { return this.GetPropertyValue<string>("siteAuthor"); }
		}

		///<summary>
		/// Site Title
		///</summary>
		[ImplementPropertyType("siteTitle")]
		public string SiteTitle
		{
			get { return this.GetPropertyValue<string>("siteTitle"); }
		}
	}
}
