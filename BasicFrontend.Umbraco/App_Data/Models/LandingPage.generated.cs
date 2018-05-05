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
	/// <summary>Landing Page</summary>
	[PublishedContentModel("landingPage")]
	public partial class LandingPage : PublishedContentModel, IContentGrid, IPageDefaults
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "landingPage";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public LandingPage(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<LandingPage, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Banner CTA Text
		///</summary>
		[ImplementPropertyType("bannerCTAText")]
		public string BannerCtatext
		{
			get { return this.GetPropertyValue<string>("bannerCTAText"); }
		}

		///<summary>
		/// Banner CTA Url
		///</summary>
		[ImplementPropertyType("bannerCTAUrl")]
		public string BannerCtaurl
		{
			get { return this.GetPropertyValue<string>("bannerCTAUrl"); }
		}

		///<summary>
		/// Banner Headline
		///</summary>
		[ImplementPropertyType("bannerHeadline")]
		public string BannerHeadline
		{
			get { return this.GetPropertyValue<string>("bannerHeadline"); }
		}

		///<summary>
		/// Banner Paragraph
		///</summary>
		[ImplementPropertyType("bannerParagraph")]
		public string BannerParagraph
		{
			get { return this.GetPropertyValue<string>("bannerParagraph"); }
		}

		///<summary>
		/// Page Style
		///</summary>
		[ImplementPropertyType("pageStyle")]
		public object PageStyle
		{
			get { return this.GetPropertyValue("pageStyle"); }
		}

		///<summary>
		/// Grid Layout
		///</summary>
		[ImplementPropertyType("gridLayout")]
		public Newtonsoft.Json.Linq.JToken GridLayout
		{
			get { return Umbraco.Web.PublishedContentModels.ContentGrid.GetGridLayout(this); }
		}

		///<summary>
		/// Colour Scheme
		///</summary>
		[ImplementPropertyType("colourScheme")]
		public object ColourScheme
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetColourScheme(this); }
		}

		///<summary>
		/// Header Type
		///</summary>
		[ImplementPropertyType("headerType")]
		public object HeaderType
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetHeaderType(this); }
		}

		///<summary>
		/// Hide in Menu
		///</summary>
		[ImplementPropertyType("hideInMenu")]
		public bool HideInMenu
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetHideInMenu(this); }
		}

		///<summary>
		/// Introduction
		///</summary>
		[ImplementPropertyType("introduction")]
		public string Introduction
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetIntroduction(this); }
		}

		///<summary>
		/// Page Type
		///</summary>
		[ImplementPropertyType("pageType")]
		public object PageType
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetPageType(this); }
		}

		///<summary>
		/// Teaser Image
		///</summary>
		[ImplementPropertyType("teaserImage")]
		public IPublishedContent TeaserImage
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetTeaserImage(this); }
		}

		///<summary>
		/// Title
		///</summary>
		[ImplementPropertyType("title")]
		public string Title
		{
			get { return Umbraco.Web.PublishedContentModels.PageDefaults.GetTitle(this); }
		}
	}
}