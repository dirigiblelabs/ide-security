/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
exports.getEditor = function() {
	var editor = {
			"id":"roles",
			"name":"Roles",
			"factory":"frame",
			"region":"center-top",
			"label":"Roles",
			"link":"../ide-security/editors/roles/editor.html",
			"contentTypes":["application/json+roles"]
	};
	return editor;
};
