package com.IMAC;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.graphics.Bitmap;
import android.media.MediaScannerConnection;
import android.media.MediaScannerConnection.OnScanCompletedListener;
import android.net.Uri;
import android.view.Gravity;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.MediaController;
import android.widget.TextView;
import android.widget.VideoView;
import java.io.File;
public class Functions extends Activity{
    
////////////////////////////////////////////////////////////////////////////////
    public void actualizarGaleria( Activity Act, TextView VCntrl, String dir_archivo ){
        final Activity FAct = Act;
        final TextView FVCntrl = VCntrl;
        final String Fdir_archivo = dir_archivo;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                try{
                                    MediaScannerConnection.scanFile(FAct.getApplicationContext(), new String[] { Fdir_archivo }, null, new OnScanCompletedListener() {

                @Override
                public void onScanCompleted(String path, Uri uri) {
                    // TODO Auto-generated method stub
                }
            });
                                    
                                    
                                    // FAct.sendBroadcast(new Intent(Intent.ACTION_MEDIA_MOUNTED, Uri.parse(Fdir_archivo) ));
                                    
        // MediaScannerConnection scanner = new MediaScannerConnection(FAct, null);
        //scanner.connect();
        //scanner.scanFile(Fdir_archivo, "image/jpeg");                // La variable "dir_archivo" es la ruta al directorio donde estará el archivo
        //scanner.disconnect();
                                }catch(Exception ex){
                                    FVCntrl.setText( ex.getMessage() );
                                }
                            }
                        });
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetVideo( Activity Act, VideoView VCntrl, String VidFile ){
        final Activity FAct = Act;
        final String FVidFile = VidFile;
        final VideoView TVFinal = VCntrl;
        final MediaController mediaController = new MediaController(FAct);
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
	       		mediaController.setAnchorView( TVFinal );
	       	TVFinal.setMediaController(mediaController);
                TVFinal.setVideoPath( FVidFile );
                if( FVidFile==null ){
                    TVFinal.resolveAdjustedSize( 0, 0);
                }else{
                    // TVFinal.requestFocus();
                    // TVFinal.start();
                    // TVFinal.pause();
                    // TVFinal.stopPlayback();
                }
                            }
                        });
                    Sleep( 1000 );
                    TVFinal.pause();
                    TVFinal.stopPlayback();
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetVisible( VideoView VCntrl, int VOpt ){
        final int FVOpt = VOpt;
        final VideoView TVFinal = VCntrl;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                TVFinal.setVisibility(FVOpt);
                            }
                        });
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetVisible( ImageView VCntrl, int VOpt ){
        final int FVOpt = VOpt;
        final ImageView TVFinal = VCntrl;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                TVFinal.setVisibility(FVOpt);
                            }
                        });
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetVisible( LinearLayout VCntrl, int VOpt ){
        final int FVOpt = VOpt;
        final LinearLayout TVFinal = VCntrl;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                TVFinal.setVisibility(FVOpt);
                            }
                        });
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetEnable( Button BCntrl, boolean BOpt ){
        final boolean FBoo = BOpt;
        final Button BFinal = BCntrl;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                BFinal.setEnabled(FBoo);
                            }
                        });
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetTextThr( TextView VCntrl, String Str ){
        final String FStr = Str;
        final TextView TVFinal = VCntrl;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                TVFinal.setText( FStr );
                            }
                        });
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetTextThr( Button VCntrl, String Str ){
        final String FStr = Str;
        final Button TVFinal = VCntrl;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                TVFinal.setText( FStr );
                            }
                        });
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetTextThr( Activity VCntrl, String Str ){
        final String FStr = Str;
        final Activity TVFinal = VCntrl;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                TVFinal.setTitle( FStr );
                            }
                        });
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetImageResource( ImageView VCntrl, int Iid ){
        final int FIid = Iid;
        final ImageView TVFinal = VCntrl;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                TVFinal.setImageResource( FIid );
                            }
                        });
                    }
                };
                t.start();
    }
////////////////////////////////////////////////////////////////////////////////
    public void SetImageBitmap( ImageView VCntrl, Bitmap bmp ){
        final Bitmap Fbmp = bmp;
        final ImageView TVFinal = VCntrl;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                TVFinal.setImageBitmap( Fbmp );
                            }
                        });
                    }
                };
                t.start();
    }
    
    
////////////////////////////////////////////////////////////////////////////////
    public void SetCompoundDrawablesWithIntrinsicBounds( Button btn, int Res ){
        final Button Fbmp = btn;
        final int FTRes = Res;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                Fbmp.setCompoundDrawablesWithIntrinsicBounds( FTRes, 0, 0, 0 );
                            }
                        });
                    }
                };
                t.start();
    }
    
////////////////////////////////////////////////////////////////////////////////
    void Sleep( long milli ){
        try {
            Thread.sleep(milli);
        } catch (InterruptedException ex) {
            
        }
    }
////////////////////////////////////////////////////////////////////////////////
    public static String GetNameFile( String ADir, String FExt ){
        int IFile = 0;
        String StrName = "/0000" + IFile + "." + FExt;
        File Fl = new File( ADir + StrName );
        while( Fl.exists() ){
            IFile++;
            if( IFile<10 ){
                StrName = "/0000" + IFile + "." + FExt;
            }else{
                if( IFile<100 ){
                    StrName = "/000" + IFile + "." + FExt;
                }else{
                    if( IFile<1000 ){
                        StrName = "/00" + IFile + "." + FExt;
                    }else{
                        if( IFile<1000 ){
                            StrName = "/0" + IFile + "." + FExt;
                        }else{
                            StrName = "/" + IFile + "." + FExt;
                        }
                    }
                }
            }
            Fl = new File( ADir + StrName );
        }
        return (ADir + StrName);
    }
////////////////////////////////////////////////////////////////////////////////
    void MsgBox( Activity Act, String Texto, String Title ){
        
        final Activity FAct = Act;
        final String FTexto = Texto;
        final String FTitle = Title;
        Thread t = new Thread(){
                    @Override
                    public void run(){
                        runOnUiThread(new Runnable(){
                            @Override
                            public void run(){
                                
                                
                                
        AlertDialog.Builder builder = new AlertDialog.Builder(FAct);
        builder.setTitle( FTitle );
        builder.setMessage( FTexto );
        builder.setPositiveButton("Ok",
        new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                // finish();
            }
        });
        AlertDialog dialog = builder.show();
        // Must call show() prior to fetching text view
        TextView messageView = (TextView)dialog.findViewById(android.R.id.message);
        messageView.setGravity(Gravity.LEFT);
        
                                
                            }
                        });
                    }
                };
                t.start();
                
                
        
    }
////////////////////////////////////////////////////////////////////////////////

/////////////////////////
    public    int RColor( int RGBC ){ return ( 255&(RGBC>>16) ); }
    public    int GColor( int RGBC ){ return ( 255&(RGBC>>8) ); }
    public    int BColor( int RGBC ){ return ( 255&(RGBC) ); }
/////////////////////////
// #define RGB(r,g,b) ((COLORREF)((BYTE)(r)|((BYTE)(g) << 8)|((BYTE)(b) << 16)))
    public    int RGB( int r, int g, int b ){
        int Res = ( (b) | ((g)<<8) | ( (r) << 16) | ( (255) << 24) );
        return Res;
    }
////////////////////////////////////////////////////////////////////////////////
}
