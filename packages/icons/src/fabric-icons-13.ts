  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling/lib/index';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-13"`,
      src: `url('${baseUrl}fabric-icons-13-0980cd6d.woff') format('woff')`
    },
    icons: {
      'WindowEdit': '\uF50E',
      'HintText': '\uF50F',
      'MediaAdd': '\uF510',
      'AnchorLock': '\uF511',
      'AutoHeight': '\uF512',
      'ChartSeries': '\uF513',
      'ChartXAngle': '\uF514',
      'ChartYAngle': '\uF515',
      'Combobox': '\uF516',
      'LineSpacing': '\uF517',
      'Padding': '\uF518',
      'PaddingTop': '\uF519',
      'PaddingBottom': '\uF51A',
      'PaddingLeft': '\uF51B',
      'PaddingRight': '\uF51C',
      'NavigationFlipper': '\uF51D',
      'AlignJustify': '\uF51E',
      'TextOverflow': '\uF51F',
      'VisualsFolder': '\uF520',
      'VisualsStore': '\uF521',
      'PictureCenter': '\uF522',
      'PictureFill': '\uF523',
      'PicturePosition': '\uF524',
      'PictureStretch': '\uF525',
      'PictureTile': '\uF526',
      'Slider': '\uF527',
      'SliderHandleSize': '\uF528',
      'DefaultRatio': '\uF529',
      'NumberSequence': '\uF52A',
      'GUID': '\uF52B',
      'ReportAdd': '\uF52C',
      'DashboardAdd': '\uF52D',
      'MapPinSolid': '\uF52E',
      'WebPublish': '\uF52F',
      'PieSingleSolid': '\uF530',
      'BlockedSolid': '\uF531',
      'DrillDown': '\uF532',
      'DrillDownSolid': '\uF533',
      'DrillExpand': '\uF534',
      'DrillShow': '\uF535',
      'OneDriveFolder16': '\uF53B',
      'FunctionalManagerDashboard': '\uF542',
      'BIDashboard': '\uF543',
      'CodeEdit': '\uF544',
      'RenewalCurrent': '\uF545',
      'RenewalFuture': '\uF546',
      'SplitObject': '\uF547',
      'BulkUpload': '\uF548',
      'DownloadDocument': '\uF549',
      'WaitlistConfirm': '\uF550',
      'WaitlistConfirmMirrored': '\uF551',
      'LaptopSecure': '\uF552',
      'DragObject': '\uF553',
      'EntryView': '\uF554',
      'EntryDecline': '\uF555',
      'ContactCardSettings': '\uF556',
      'ContactCardSettingsMirrored': '\uF557',
      'CalendarSettings': '\uF558',
      'CalendarSettingsMirrored': '\uF559',
      'HardDriveLock': '\uF55A',
      'HardDriveUnlock': '\uF55B',
      'AccountManagement': '\uF55C',
      'TransitionPop': '\uF5B2',
      'TransitionPush': '\uF5B3',
      'TransitionEffect': '\uF5B4',
      'LookupEntities': '\uF5B5',
      'ExploreData': '\uF5B6',
      'AddBookmark': '\uF5B7',
      'SearchBookmark': '\uF5B8',
      'DrillThrough': '\uF5B9',
      'MasterDatabase': '\uF5BA',
      'CertifiedDatabase': '\uF5BB',
      'MaximumValue': '\uF5BC',
      'MinimumValue': '\uF5BD',
      'VisualStudioIDELogo32': '\uF5D0',
      'PasteAsText': '\uF5D5',
      'PasteAsCode': '\uF5D6',
      'BrowserTab': '\uF5D7',
      'BrowserTabScreenshot': '\uF5D8',
      'DesktopScreenshot': '\uF5D9',
      'FileYML': '\uF5DA',
      'ClipboardSolid': '\uF5DC',
      'AnalyticsView': '\uF5F1',
      'Leave': '\uF627',
      'Trending12': '\uF62D',
      'Blocked12': '\uF62E',
      'Warning12': '\uF62F',
      'CheckedOutByOther12': '\uF630',
      'CheckedOutByYou12': '\uF631',
      'CircleShapeSolid': '\uF63C',
      'SquareShapeSolid': '\uF63D',
      'TriangleShapeSolid': '\uF63E',
      'DropShapeSolid': '\uF63F',
      'RectangleShapeSolid': '\uF640',
      'InsertColumnsLeft': '\uF64A',
      'InsertColumnsRight': '\uF64B',
      'InsertRowsAbove': '\uF64C',
      'InsertRowsBelow': '\uF64D',
      'DeleteColumns': '\uF64E',
      'DeleteRows': '\uF64F'
    }
  };

  registerIcons(subset, options);
}
