/*
  Copyright 2011-2016 Marvell Semiconductor, Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
import HTTPServer from "HTTPServer";

var main = {
	onLaunch() {
		let server = new HTTPServer({port: 80}); 
		this.server = server; //binds the server to the main object so it won't be garbage collected
		server.onRequest = request => {
			request.response("text/plain", `${String.fromArrayBuffer(request.content)} back!`); 
		}
	}
}

export default main;

