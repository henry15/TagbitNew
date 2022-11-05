/*globals svgEditor */
/*globals svgEditor */
svgEditor.readLang({
	lang: "lv",
	dir : "ltr",
	common: {
		"ok": "Glābt",
		"cancel": "Atcelt",
		"key_backspace": "backspace", 
		"key_del": "delete", 
		"key_down": "down", 
		"key_up": "up", 
		"more_opts": "More Options",
		"url": "URL",
		"width": "Width",
		"height": "Height"
	},
	misc: {
		"powered_by": "Powered by"
	}, 
	ui: {
		"toggle_stroke_tools": "Show/hide more stroke tools",
		"palette_info": "Noklikšķiniet, lai mainītu aizpildījuma krāsu, shift-click to mainīt stroke krāsa",
		"zoom_level": "Pārmaiņu mērogu",
		"panel_drag": "Drag left/right to resize side panel"
	},
	properties: {
		"id": "Identify the element",
		"fill_color": "Change aizpildījuma krāsu",
		"stroke_color": "Change stroke krāsa",
		"stroke_style": "Maina stroke domuzīme stils",
		"stroke_width": "Change stroke platums",
		"pos_x": "Change X coordinate",
		"pos_y": "Change Y coordinate",
		"linecap_butt": "Linecap: Butt",
		"linecap_round": "Linecap: Round",
		"linecap_square": "Linecap: Square",
		"linejoin_bevel": "Linejoin: Bevel",
		"linejoin_miter": "Linejoin: Miter",
		"linejoin_round": "Linejoin: Round",
		"angle": "Mainīt griešanās leņķis",
		"blur": "Change gaussian blur value",
		"opacity": "Mainīt izvēlēto objektu necaurredzamība",
		"circle_cx": "Maina aplis&#39;s CX koordinēt",
		"circle_cy": "Pārmaiņu loks ir cy koordinēt",
		"circle_r": "Pārmaiņu loks ir rādiuss",
		"ellipse_cx": "Mainīt elipses&#39;s CX koordinēt",
		"ellipse_cy": "Mainīt elipses&#39;s cy koordinēt",
		"ellipse_rx": "Mainīt elipses&#39;s x rādiuss",
		"ellipse_ry": "Mainīt elipses&#39;s y rādiuss",
		"line_x1": "Mainīt līnijas sākas x koordinēt",
		"line_x2": "Mainīt līnijas beigu x koordinēt",
		"line_y1": "Mainīt līnijas sākas y koordinātu",
		"line_y2": "Mainīt līnijas beigu y koordinātu",
		"rect_height": "Change Taisnstūra augstums",
		"rect_width": "Change taisnstūra platums",
		"corner_radius": "Maina Taisnstūris Corner Rādiuss",
		"image_width": "Mainīt attēla platumu",
		"image_height": "Mainīt attēla augstums",
		"image_url": "Change URL",
		"node_x": "Change node's x coordinate",
		"node_y": "Change node's y coordinate",
		"seg_type": "Change Segment type",
		"straight_segments": "Straight",
		"curve_segments": "Curve",
		"text_contents": "Mainītu teksta saturs",
		"font_family": "Mainīt fonta Family",
		"font_size": "Mainīt fonta izmēru",
		"bold": "Bold Text",
		"italic": "Kursīvs"
	},
	tools: { 
		"main_menu": "Main Menu",
		"bkgnd_color_opac": "Change background color / necaurredzamība",
		"connector_no_arrow": "No arrow",
		"fitToContent": "Fit to Content",
		"fit_to_all": "Fit uz visu saturu",
		"fit_to_canvas": "Ievietot audekls",
		"fit_to_layer_content": "Ievietot slānis saturs",
		"fit_to_sel": "Fit atlases",
		"align_relative_to": "Līdzināt, salīdzinot ar ...",
		"relativeTo": "salīdzinājumā ar:",
		"lapa": "lapa",
		"largest_object": "lielākais objekts",
		"selected_objects": "ievēlēts objekti",
		"smallest_object": "mazākais objekts",
		"new_doc": "New Image",
		"open_doc": "Open Image",
		"export_img": "Export",
		"save_doc": "Save Image",
		"import_doc": "Import SVG",
		"align_to_page": "Align Element to Page",
		"align_bottom": "Līdzināt Bottom",
		"align_center": "Līdzināt uz centru",
		"align_left": "Līdzināt pa kreisi",
		"align_middle": "Līdzināt Middle",
		"align_right": "Līdzināt pa labi",
		"align_top": "Līdzināt Top",
		"mode_select": "Select Tool",
		"mode_fhpath": "Pencil Tool",
		"mode_line": "Line Tool",
		"mode_connect": "Connect two objects",
		"mode_rect": "Rectangle Tool",
		"mode_square": "Square Tool",
		"mode_fhrect": "Free-Hand Taisnstūris",
		"mode_ellipse": "Elipse",
		"mode_circle": "Circle",
		"mode_fhellipse": "Free-Hand Ellipse",
		"mode_path": "Path",
		"mode_shapelib": "Shape library",
		"mode_text": "Text Tool",
		"mode_image": "Image Tool",
		"mode_zoom": "Zoom Tool",
		"mode_eyedropper": "Eye Dropper Tool",
		"no_embed": "NOTE: This image cannot be embedded. It will depend on this path to be displayed",
		"undo": "Atpogāt",
		"redo": "Redo",
		"tool_source": "Rediģēt Source",
		"wireframe_mode": "Wireframe Mode",
		"toggle_grid": "Show/Hide Grid",
		"clone": "Clone Element(s)",
		"del": "Delete Element(s)",
		"group_elements": "Grupa Elements",
		"make_link": "Make (hyper)link",
		"set_link_url": "Set link URL (leave empty to remove)",
		"to_path": "Convert to Path",
		"reorient_path": "Reorient path",
		"ungroup": "Atgrupēt Elements",
		"docprops": "Document Properties",
		"imagelib": "Image Library",
		"move_bottom": "Pārvietot uz leju",
		"move_top": "Pārvietot uz augšu",
		"node_clone": "Clone Node",
		"node_delete": "Delete Node",
		"node_link": "Link Control Points",
		"add_subpath": "Add sub-path",
		"openclose_path": "Open/close sub-path",
		"source_save": "Glābt",
		"cut": "Cut",
		"copy": "Copy",
		"paste": "Paste",
		"paste_in_place": "Paste in Place",
		"delete": "Delete",
		"group": "Group",
		"move_front": "Bring to Front",
		"move_up": "Bring Forward",
		"move_down": "Send Backward",
		"move_back": "Send to Back"
	},
	layers: {
		"layer":"Layer",
		"layers": "Layers",
		"del": "Dzēst Layer",
		"move_down": "Pārvietot slāni uz leju",
		"new": "New Layer",
		"rename": "Pārdēvēt Layer",
		"move_up": "Pārvietot slāni uz augšu",
		"dupe": "Duplicate Layer",
		"merge_down": "Merge Down",
		"merge_all": "Merge All",
		"move_elems_to": "Move elements to:",
		"move_selected": "Move selected elements to a different layer"
	},
	config: {
		"image_props": "Image Properties",
		"doc_title": "Title",
		"doc_dims": "Canvas Dimensions",
		"included_images": "Included Images",
		"image_opt_embed": "Embed data (local files)",
		"image_opt_ref": "Use file reference",
		"editor_prefs": "Editor Preferences",
		"icon_size": "Icon size",
		"language": "Language",
		"background": "Editor Background",
		"editor_img_url": "Image URL",
		"editor_bg_note": "Note: Background will not be saved with image.",
		"icon_large": "Large",
		"icon_medium": "Medium",
		"icon_small": "Small",
		"icon_xlarge": "Extra Large",
		"select_predefined": "Izvēlieties iepriekš:",
		"units_and_rulers": "Units & Rulers",
		"show_rulers": "Show rulers",
		"base_unit": "Base Unit:",
		"grid": "Grid",
		"snapping_onoff": "Snapping on/off",
		"snapping_stepsize": "Snapping Step-Size:",
		"grid_color": "Grid color"
	},
	shape_cats: {
		"basic": "Basic",
		"object": "Objects",
		"symbol": "Symbols",
		"arrow": "Arrows",
		"flowchart": "Flowchart",
		"animal": "Animals",
		"game": "Cards & Chess",
		"dialog_balloon": "Dialog balloons",
		"electronics": "Electronics",
		"math": "Mathematical",
		"music": "Music",
		"misc": "Miscellaneous",
		"raphael_1": "raphaeljs.com set 1",
		"raphael_2": "raphaeljs.com set 2"
	},
	imagelib: {
		"select_lib": "Select an image library",
		"show_list": "Show library list",
		"import_single": "Import single",
		"import_multi": "Import multiple",
		"open": "Open as new document"
	},
	notification: {
		"invalidAttrValGiven":"Invalid value given",
		"noContentToFitTo":"No content to fit to",
		"dupeLayerName":"There is already a layer named that!",
		"enterUniqueLayerName":"Please enter a unique layer name",
		"enterNewLayerName":"Please enter the new layer name",
		"layerHasThatName":"Layer already has that name",
		"QmoveElemsToLayer":"Move selected elements to layer '%s'?",
		"QwantToClear":"Do you want to clear the drawing? This will also erase your undo history!",
		"QwantToOpen":"Do you want to open a new file? This will also erase your undo history!",
		"QerrorsRevertToSource":"There were parsing errors in your SVG source. Revert back to original SVG source?",
		"QignoreSourceChanges":"Ignore changes made to SVG source?",
		"featNotSupported":"Feature not supported",
		"enterNewImgURL":"Enter the new image URL",
		"defsFailOnSave": "NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.",
		"loadingImage":"Loading image, please wait...",
		"saveFromBrowser": "Select \"Save As...\" in your browser to save this image as a %s file.",
		"noteTheseIssues": "Also note the following issues: ",
		"unsavedChanges": "There are unsaved changes.",
		"enterNewLinkURL": "Enter the new hyperlink URL",
		"errorLoadingSVG": "Error: Unable to load SVG data",
		"URLloadFail": "Unable to load from URL",
		"retrieving": "Retrieving \"%s\"..."
	},
	confirmSetStorage: {
		message: "By default and where supported, SVG-Edit can store your editor "+
		"preferences and SVG content locally on your machine so you do not "+
		"need to add these back each time you load SVG-Edit. If, for privacy "+
		"reasons, you do not wish to store this information on your machine, "+
		"you can change away from the default option below.",
		storagePrefsAndContent: "Store preferences and SVG content locally",
		storagePrefsOnly: "Only store preferences locally",
		storagePrefs: "Store preferences locally",
		storageNoPrefsOrContent: "Do not store my preferences or SVG content locally",
		storageNoPrefs: "Do not store my preferences locally",
		rememberLabel: "Remember this choice?",
		rememberTooltip: "If you choose to opt out of storage while remembering this choice, the URL will change so as to avoid asking again."
	}
});