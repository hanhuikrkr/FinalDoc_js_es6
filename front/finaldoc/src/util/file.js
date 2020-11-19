/*
 * @Author: hanhui
 * @Date: 2020-11-19 00:09:22
 * @LastEditTime: 2020-11-19 00:12:27
 * @LastEditors: Please set LastEditors
 * @Description: via coping a new Object file.status problem
 * @FilePath: \FinalDoc_js_es6\front\finaldoc\src\util\file.js
 */

export function fileToObject(file) {
    return {
      ...file,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      name: file.name,
      size: file.size,
      type: file.type,
      uid: file.uid,
      percent: 0,
      originFileObj: file,
    };
  }
  