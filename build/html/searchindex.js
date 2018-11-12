Search.setIndex({docnames:["api/correctors.thermodynamic_corrector","api/database.elements_data","api/descriptors.component_descriptors","api/descriptors.descriptors","api/index","api/models.kinetic_model","api/models.micro_kinetic_model","api/mpicommons","api/parsers.absolute_energy_parser","api/parsers.kmc_parser","api/parsers.parser_base","api/parsers.relative_energy_parser","api/parsers.rxn_parser","api/plotters.energy_profile_plotter","api/solvers.mean_field_solver","api/solvers.rootfinding_iterators","api/solvers.solver_base","api/solvers.steady_state_solver","api/utilities","index","install","intro","tutorial/hub_animation","tutorial/hub_job","tutorial/hub_model","tutorial/index","tutorial/model_construction","tutorial/rxn_parsing"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api/correctors.thermodynamic_corrector.rst","api/database.elements_data.rst","api/descriptors.component_descriptors.rst","api/descriptors.descriptors.rst","api/index.rst","api/models.kinetic_model.rst","api/models.micro_kinetic_model.rst","api/mpicommons.rst","api/parsers.absolute_energy_parser.rst","api/parsers.kmc_parser.rst","api/parsers.parser_base.rst","api/parsers.relative_energy_parser.rst","api/parsers.rxn_parser.rst","api/plotters.energy_profile_plotter.rst","api/solvers.mean_field_solver.rst","api/solvers.rootfinding_iterators.rst","api/solvers.solver_base.rst","api/solvers.steady_state_solver.rst","api/utilities.rst","index.rst","install.rst","intro.rst","tutorial/hub_animation.rst","tutorial/hub_job.rst","tutorial/hub_model.rst","tutorial/index.rst","tutorial/model_construction.rst","tutorial/rxn_parsing.rst"],objects:{"scaks.correctors.thermodynamic_corrector":{ThermodynamicCorrector:[0,0,1,""]},"scaks.correctors.thermodynamic_corrector.ThermodynamicCorrector":{archive_data:[0,1,1,""],correct_relative_energies:[0,1,1,""],entropy_correction:[0,1,1,""],shomate_correction:[0,1,1,""]},"scaks.database":{elements_data:[1,2,0,"-"],lattice_data:[1,2,0,"-"],thermo_data:[1,2,0,"-"]},"scaks.descriptors":{component_descriptors:[2,2,0,"-"],descriptors:[3,2,0,"-"]},"scaks.descriptors.component_descriptors":{Component:[2,0,1,""]},"scaks.descriptors.descriptors":{AnalysisInterval:[3,0,1,""],AttrDescriptor:[3,0,1,""],Bool:[3,0,1,""],Dict:[3,0,1,""],Float:[3,0,1,""],FloatList2D:[3,0,1,""],HashableDict:[3,0,1,""],HashableList:[3,0,1,""],Integer:[3,0,1,""],Memoized:[3,0,1,""],RefEnergies:[3,0,1,""],Sequence:[3,0,1,""],SpaceVectors:[3,0,1,""],SpeciesDefinitions:[3,0,1,""],String:[3,0,1,""],Type:[3,0,1,""],make_hashable:[3,3,1,""]},"scaks.descriptors.descriptors.HashableDict":{clear:[3,1,1,""],copy:[3,1,1,""],fromkeys:[3,1,1,""],get:[3,1,1,""],items:[3,1,1,""],keys:[3,1,1,""],pop:[3,1,1,""],popitem:[3,1,1,""],setdefault:[3,1,1,""],update:[3,1,1,""],values:[3,1,1,""]},"scaks.descriptors.descriptors.HashableList":{append:[3,1,1,""],clear:[3,1,1,""],copy:[3,1,1,""],count:[3,1,1,""],extend:[3,1,1,""],index:[3,1,1,""],insert:[3,1,1,""],pop:[3,1,1,""],remove:[3,1,1,""],reverse:[3,1,1,""],sort:[3,1,1,""]},"scaks.models.kinetic_model":{KineticModel:[5,0,1,""]},"scaks.models.kinetic_model.KineticModel":{__init__:[5,1,1,""],__weakref__:[5,4,1,""],clear_handlers:[5,1,1,""],generate_absolute_energies_file:[5,1,1,""],generate_relative_energies_file:[5,1,1,""],run:[5,1,1,""],set_corrector:[5,1,1,""],set_logger_level:[5,1,1,""],set_plotter:[5,1,1,""],set_solver:[5,1,1,""]},"scaks.models.micro_kinetic_model":{MicroKineticModel:[6,0,1,""]},"scaks.models.micro_kinetic_model.MicroKineticModel":{clear_handlers:[6,1,1,""],generate_absolute_energies_file:[6,1,1,""],generate_relative_energies_file:[6,1,1,""],run:[6,1,1,""],set_corrector:[6,1,1,""],set_logger_level:[6,1,1,""],set_plotter:[6,1,1,""],set_solver:[6,1,1,""]},"scaks.mpicommons":{MPIUtil:[7,0,1,""],master_only:[7,3,1,""]},"scaks.mpicommons.MPIUtil":{merge_seq:[7,1,1,""],split_seq:[7,1,1,""],split_size:[7,1,1,""]},"scaks.parsers.absolute_energy_parser":{AbsoluteEnergyParser:[8,0,1,""]},"scaks.parsers.absolute_energy_parser.AbsoluteEnergyParser":{archive_data:[8,1,1,""],get_molecular_mass:[8,5,1,""],get_stoichiometry_matrices:[8,1,1,""],get_total_rxn_equation:[8,1,1,""],parse_data:[8,1,1,""],parse_elementary_rxns:[8,1,1,""],regex_dict:[8,1,1,""]},"scaks.parsers.kmc_parser":{KMCParser:[9,0,1,""]},"scaks.parsers.kmc_parser.KMCParser":{archive_data:[9,1,1,""],construct_lattice:[9,1,1,""],construct_sitesmap:[9,1,1,""],get_molecular_mass:[9,5,1,""],get_stoichiometry_matrices:[9,1,1,""],get_total_rxn_equation:[9,1,1,""],parse_configuration:[9,1,1,""],parse_data:[9,1,1,""],parse_elementary_rxns:[9,1,1,""],parse_processes:[9,1,1,""],regex_dict:[9,1,1,""]},"scaks.parsers.parser_base":{ParserBase:[10,0,1,""]},"scaks.parsers.parser_base.ParserBase":{archive_data:[10,1,1,""],get_molecular_mass:[10,5,1,""],get_stoichiometry_matrices:[10,1,1,""],get_total_rxn_equation:[10,1,1,""],parse_elementary_rxns:[10,1,1,""],regex_dict:[10,1,1,""]},"scaks.parsers.relative_energy_parser":{RelativeEnergyParser:[11,0,1,""]},"scaks.parsers.relative_energy_parser.RelativeEnergyParser":{archive_data:[11,1,1,""],get_molecular_mass:[11,5,1,""],get_stoichiometry_matrices:[11,1,1,""],get_total_rxn_equation:[11,1,1,""],parse_data:[11,1,1,""],parse_elementary_rxns:[11,1,1,""],regex_dict:[11,1,1,""]},"scaks.parsers.rxn_parser":{ChemFormula:[12,0,1,""],ChemState:[12,0,1,""],RxnEquation:[12,0,1,""]},"scaks.parsers.rxn_parser.ChemFormula":{conserve:[12,1,1,""],formula:[12,1,1,""],get_elements_dict:[12,1,1,""],get_sites_dict:[12,1,1,""],get_species_elements_dict:[12,1,1,""],nsite:[12,1,1,""],site:[12,1,1,""],species:[12,1,1,""],species_site:[12,1,1,""],stoichiometry:[12,1,1,""],texen:[12,1,1,""],type:[12,1,1,""]},"scaks.parsers.rxn_parser.ChemState":{chem_state:[12,1,1,""],conserve:[12,1,1,""],get_elements_dict:[12,1,1,""],get_sites_dict:[12,1,1,""],get_species_site_dict:[12,1,1,""],get_species_site_list:[12,1,1,""],split:[12,1,1,""],texen:[12,1,1,""],tolist:[12,1,1,""]},"scaks.parsers.rxn_parser.RxnEquation":{adsorption_gases:[12,1,1,""],check_conservation:[12,1,1,""],desorption_gases:[12,1,1,""],revert:[12,1,1,""],rxn_equation:[12,1,1,""],texen:[12,1,1,""],to_formula_list:[12,1,1,""],tolist:[12,1,1,""]},"scaks.plotters.energy_profile_plotter":{EnergyProfilePlotter:[13,0,1,""]},"scaks.plotters.energy_profile_plotter.EnergyProfilePlotter":{archive_data:[13,1,1,""],plot_all:[13,1,1,""]},"scaks.solvers.mean_field_solver":{MeanFieldSolver:[14,0,1,""]},"scaks.solvers.mean_field_solver.MeanFieldSolver":{archive_data:[14,1,1,""],boltzmann_coverages:[14,1,1,""],classified_numerical_jacobian:[14,1,1,""],get_TST_barrier_from_CT:[14,5,1,""],get_data:[14,1,1,""],get_data_symbols:[14,1,1,""],get_elementary_rate_expression:[14,1,1,""],get_elementary_rate_sym:[14,1,1,""],get_equilibrium_constant_syms:[14,1,1,""],get_kCT:[14,5,1,""],get_kTST:[14,1,1,""],get_latex_strs:[14,5,1,""],get_net_rate_syms:[14,1,1,""],get_net_rates:[14,1,1,""],get_net_rates_by_sym:[14,1,1,""],get_rate_constant_syms:[14,1,1,""],get_rate_constants_by_sym:[14,1,1,""],get_rate_expressions:[14,1,1,""],get_rate_syms:[14,1,1,""],get_rates:[14,1,1,""],get_rates_by_sym:[14,1,1,""],get_reversibilities:[14,1,1,""],get_rxn_rates_CT:[14,1,1,""],get_rxn_rates_TST:[14,1,1,""],get_subs_dict:[14,1,1,""],get_tof:[14,1,1,""],get_tof_by_sym:[14,1,1,""],get_tof_syms:[14,1,1,""],log_latex:[14,1,1,""]},"scaks.solvers.rootfinding_iterators":{ConstrainedNewton:[15,0,1,""],MDNewton:[15,0,1,""]},"scaks.solvers.solver_base":{SolverBase:[16,0,1,""]},"scaks.solvers.solver_base.SolverBase":{archive_data:[16,1,1,""],get_TST_barrier_from_CT:[16,5,1,""],get_kCT:[16,5,1,""],get_kTST:[16,1,1,""],get_rxn_rates_CT:[16,1,1,""],get_rxn_rates_TST:[16,1,1,""]},"scaks.solvers.steady_state_solver":{SteadyStateSolver:[17,0,1,""]},"scaks.solvers.steady_state_solver.SteadyStateSolver":{analytical_jacobian:[17,1,1,""],analytical_jacobian_by_sym:[17,1,1,""],analytical_jacobian_sym:[17,1,1,""],archive_data:[17,1,1,""],boltzmann_coverages:[17,1,1,""],classified_numerical_jacobian:[17,1,1,""],coarse_steady_state_cvgs:[17,1,1,""],fsolve_steady_state_cvgs:[17,1,1,""],get_TST_barrier_from_CT:[17,5,1,""],get_adsorbate_dtheta_dt_expression:[17,1,1,""],get_adsorbate_dtheta_dt_sym:[17,1,1,""],get_data:[17,1,1,""],get_data_symbols:[17,1,1,""],get_dtheta_dt_expressions:[17,1,1,""],get_dtheta_dt_syms:[17,1,1,""],get_elementary_dtheta_dt_expression:[17,1,1,""],get_elementary_dtheta_dt_sym:[17,1,1,""],get_elementary_rate_expression:[17,1,1,""],get_elementary_rate_sym:[17,1,1,""],get_equilibrium_constant_syms:[17,1,1,""],get_kCT:[17,5,1,""],get_kTST:[17,1,1,""],get_latex_strs:[17,5,1,""],get_net_rate_syms:[17,1,1,""],get_net_rates:[17,1,1,""],get_net_rates_by_sym:[17,1,1,""],get_rate_constant_syms:[17,1,1,""],get_rate_constants_by_sym:[17,1,1,""],get_rate_expressions:[17,1,1,""],get_rate_syms:[17,1,1,""],get_rates:[17,1,1,""],get_rates_by_sym:[17,1,1,""],get_residual:[17,1,1,""],get_reversibilities:[17,1,1,""],get_rxn_rates_CT:[17,1,1,""],get_rxn_rates_TST:[17,1,1,""],get_single_XRC:[17,1,1,""],get_steady_state_cvgs:[17,1,1,""],get_subs_dict:[17,1,1,""],get_tof:[17,1,1,""],get_tof_by_sym:[17,1,1,""],get_tof_syms:[17,1,1,""],log_latex:[17,1,1,""],modify_init_guess:[17,1,1,""],solve_ode:[17,1,1,""],steady_state_function:[17,1,1,""],steady_state_function_by_sym:[17,1,1,""]},"scaks.utilities":{check_utilities:[18,2,0,"-"],coordinate_utilities:[18,2,0,"-"],format_utilities:[18,2,0,"-"]},"scaks.utilities.check_utilities":{check_analysis_interval:[18,3,1,""],check_process_coordinates:[18,3,1,""],check_process_dict:[18,3,1,""],check_ref_energies:[18,3,1,""],check_sequence:[18,3,1,""],check_species_definitions:[18,3,1,""],check_string:[18,3,1,""]},"scaks.utilities.coordinate_utilities":{CoordsGroup:[18,0,1,""]},"scaks.utilities.coordinate_utilities.CoordsGroup":{append:[18,1,1,""],coordinates:[18,1,1,""],elements:[18,1,1,""],extend:[18,1,1,""],move:[18,1,1,""]},"scaks.utilities.format_utilities":{convert_time:[18,3,1,""],get_dict_string:[18,3,1,""],get_list_string:[18,3,1,""]},scaks:{mpicommons:[7,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function","4":"py:attribute","5":"py:staticmethod"},terms:{"26e":26,"2co2_g":27,"2co_g":27,"2o_":[8,9,10,11,12,14,17,26,27],"32e":26,"6639131127638393e":[8,9,10,11],"abstract":16,"case":3,"catch":26,"class":[0,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,26,27],"default":[0,2,3,5,6,8,9,10,11,13,14,15,16,17,18],"final":[12,17,27],"float":[0,3,5,6,13,14,15,16,17,18],"function":[0,3,6,7,8,9,10,11,12,14,15,16,17,18,26],"import":[5,6,12,20,21,26,27],"int":[5,6,7,13,18],"new":[3,17,18,26],"return":[0,3,5,6,8,9,10,11,12,14,15,17,18,27],"static":[8,9,10,11,14,16,17],"true":[3,6,8,9,10,11,14,17,26,27],"try":[20,21,26],"var":3,"while":26,For:27,GAS:0,Gas:26,NOT:[14,16,17],Not:[14,17],ODE:[17,23,26],O_s:[8,9,10,11,14,17,26,27],Ode:6,The:[0,2,3,5,6,7,8,9,11,12,14,15,16,17,18,23,26],Then:[21,23,26],There:24,Use:[14,15,17,25],Using:25,With:[26,27],__get__:[2,3],__init__:5,__main__:26,__name__:26,__weakref__:5,_matrix:17,_owner:17,abs_energi:[5,6,8,26],absenc:21,absolut:[0,5,6,8,9,10,11,14,16,17,26],absolute_energi:26,absolute_energy_pars:8,absoluteenergypars:[4,5,19],accord:[7,14,16,17],account:[14,16,17],accur:5,acronym:21,act:14,act_ratio:[14,16,17],activ:[14,16,17],active_ratio:26,actual:[14,16,17],add:[11,18],addit:24,adsorb:[12,14,17,27],adsorbate_nam:[8,9,10,11,17],adsorbatet:17,adsorpt:[14,16,17,26,27],adsorption_gas:12,after:[5,6,22,23,26,27],afterward:15,algo:17,algorithm:[5,13,17,24],all:[2,3,5,6,8,9,10,11,13,14,16,17,18,22,23,24,26,27],allow:[6,15],along:[14,16,17],alreadi:23,also:[3,20,21,23,24],alwai:21,analys:10,analysi:[18,21],analysis_interv:18,analysisinterv:3,analyt:17,analytical_jacobian:17,analytical_jacobian_by_sym:17,analytical_jacobian_sym:17,ani:[0,2,3,5,6,8,9,10,11,13,14,15,16,17,18],anim:[19,25],animi:22,anoth:12,api:[19,26,27],appear:24,append:[3,14,17,18,26],applic:[21,23],approxim:17,approxmi:6,architect:21,archiv:6,archive_data:[0,8,9,10,11,13,14,16,17],archived_vari:6,area:[14,16,17],arg:17,arrai:18,arrow:[8,9,10,11,27],assist:21,atm:[14,16,17],attrdescriptor:[2,3],attribut:[2,3,5,6,8,9,10,11],auc:[14,16,17],auto_:26,auto_ode_coverag:26,automat:[20,23,26],avail:[],avoid:[14,17],axb_solv:15,back:[14,17,21],backend:20,balanc:25,bar:0,barrier:[14,16,17,21,24],base:[0,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,27],basi:21,becaus:21,been:27,befor:[3,20],begin:[17,24],being:15,below:[26,27],besid:[21,24,26],black:13,block:23,boltzmann:[14,17],boltzmann_coverag:[14,17],bolztmann:[14,17],bond:27,bool:[3,6,8,9,10,11,12,14,16,17],bootstrap:21,both:[21,26],box:24,browser:20,buffer:6,build:[19,21,23,25,26],built:[5,21,26,27],button:[23,24],buttong:23,calcul:[5,6,14,15,16,17,21,26],calculu:15,calcxrc:26,call:[2,3,7,21,23],can:[6,15,20,21,22,23,24,26,27],candid:[2,3],carbon:27,catalysi:21,catalyst:19,catalyt:21,catmap:[],catynet:[],catynetics_test:[],certain:[14,16,17],ch3oh_g:6,ch4:[8,9,10,11],chang:6,charact:27,check:[12,17,18,22,24],check_analysis_interv:18,check_conserv:[12,27],check_process_coordin:18,check_process_dict:18,check_ref_energi:18,check_sequ:18,check_species_definit:18,check_str:18,check_util:[4,19],chem_stat:12,chemformula:[12,27],chemic:[1,12,21,27],chemkin:[],chemstat:[12,27],classified_numerical_jacobian:[14,17],clean:26,clear:[3,5,6],clear_handl:[5,6],click:[23,24],clone:20,close:15,cloud:21,co2_g:[8,9,10,11,26,27],co_:[8,9,10,11,26,27],co_b:27,co_g:[0,8,9,10,11,26,27],coarse_guess:[6,26],coarse_steady_state_cvg:17,code:[13,20,21,23],coeffici:[8,9,10,11],collis:[5,14,16,17],color:13,column:18,com:[20,21],common:[18,27],compatutil:26,complet:[21,22,23],complex:21,compon:[2,3,21,26],component_descriptor:[4,19],comput:[21,26],condit:[14,16,17,24],configur:9,configuration_fil:9,connect:27,conserv:[12,22],consid:[],consist:27,consol:[5,6],console_handler_level:[5,6],constant:[14,16,17],constrainednewton:[6,15],constraint:15,constribut:0,construct:[9,24,26,27],construct_lattic:9,construct_sitesmap:9,contain:[5,6,15,17,26],content:[19,26],contin:23,control:[6,26],convent:[12,25],converg:[15,17],convert:[12,18],convert_tim:[18,26],convet:25,coordin:18,coordinate_util:[4,19],coordsgroup:18,copi:3,core:[2,21,23],correct:[0,18,24,27],correct_relative_energi:0,correctli:[20,27],corrector:[4,5,6,19,26],corrector_bas:0,correctorbas:0,correspond:[3,17,26],could:[0,5,6,26],count:3,cours:26,coverag:[6,14,15,17,23,24,26],creat:[9,12,21,26],current:[5,6,12,20,21,23,26],custom:[21,26],cvg:[14,17],cvgs_tupl:[14,17],data:[0,1,5,6,7,8,9,10,11,13,14,16,17,23,26],data_fil:6,data_nam:[0,8,9,10,11,13,14,16,17],datatabas:[4,19],decimal_precis:6,decor:7,deepcopi:3,deepli:3,defin:5,definit:[3,5,9,10,18,22,25,26],degre:[6,26],delet:24,demand:21,depth:13,deriv:[14,17],describ:21,descriptor:[4,19],design:21,desorption_gas:12,despit:21,detail:[17,26],develop:21,dict:[0,3,5,6,8,9,10,11,12,13,14,16,17,18,26],dict_obj:18,dictionari:[3,5,6,8,9,10,11,12,25],differ:[14,17,18,20,22,26,27],dimension:15,dioxid:27,dir:26,direct:[6,14,17],directori:[23,26],displai:23,dissoci:27,distribut:21,diverg:[14,17],divid:7,doc:17,document:21,doe:3,doing:18,don:[],done:17,dop853:17,dopri5:17,dthe:17,dtheta:17,dtheta_dt:17,dtheta_dt_express:17,dump:[0,8,9,10,11,13,14,16,17,26],each:[7,13,14,17,23,26,27],easiest:26,easili:[20,21,23],ecourag:[],edit:22,effici:[14,16,17],either:[3,26],element:[1,3,12,18],elementari:[5,6,8,9,10,11,12,13,14,16,17,22,25,26],elementary_rxn:[8,9,10,11],elementary_rxn_list:[14,17],elementary_rxns_list:[8,9,10,11],elements_data:[4,19],els:3,empti:[3,14,17],end:[3,21,26],energi:[0,3,5,6,8,10,11,13,14,16,17,18,21,22,23,26],energy_fil:9,energy_profile_plott:13,energyprofileplott:[4,19,26],enerig:[14,17],engin:27,enough:[15,21],ensur:20,enter:23,entri:[8,9,10,11,18],entropi:0,entropy_correct:0,entry_typ:[3,18],env:7,environ:5,epsilon:[6,17],equal:3,equat:[0,8,9,10,11,12,13,14,15,17],equilibrium:[14,17],error:[6,21,26],especi:15,essenti:[5,6,11,26],essneti:5,even:20,exampl:[0,5,6,8,9,10,11,12,14,17,18,26,27],example_job:23,except:[26,27],execut:26,exist:[22,25],exit:26,expect:17,expert:21,explicitli:26,explor:23,express:[5,8,9,10,11,12,14,16,17,19,21,24,25,26],extend:[3,18],factor:[14,16,17],fals:[3,8,9,10,11,14,16,17,26],famou:21,fast:17,faster:15,few:26,field:21,file:[0,5,6,8,9,10,11,13,14,16,17,18,22,25],file_handler_level:[5,6],filenam:[5,6,8,9,11],fill:23,find:[15,21],finish:[23,26],first:[3,21],fix:21,flag:[3,14,16,17],flask:21,flexibl:21,floatlist2d:3,follow:[3,12,26],form:[17,23],format:[14,17,18,26],format_util:[4,19,26],formula:[0,12,14,17,27],forward:[14,17],found:3,framework:21,free:[0,14,16,17],frequenc:[6,14,17,21,23,26],friendli:[21,23],from:[0,3,5,6,9,12,14,15,16,17,18,26,27],fromkei:3,front:21,fsolv:[6,17],fsolve_steady_state_cvg:17,fucntion:[14,17],func:[3,7],further:[14,16,17],gaf:[6,14,17],gar:[6,14,17],gas:[0,12,14,16,17,26,27],gas_nam:[0,8,9,10,11,14,17],gase:24,gather:7,gener:[5,6,12,14,17,22,25,26],generate_absolute_energies_fil:[5,6,26],generate_relative_energies_fil:[5,6,26],get:[0,3,6,8,9,10,11,12,14,15,16,17,18,26,27],get_adsorbate_dtheta_dt_express:17,get_adsorbate_dtheta_dt_sym:17,get_data:[14,17,26],get_data_symbol:[14,17],get_dict_str:18,get_dtheta_dt_express:17,get_dtheta_dt_sym:17,get_elementary_dtheta_dt_express:17,get_elementary_dtheta_dt_sym:17,get_elementary_rate_express:[14,17],get_elementary_rate_sym:[14,17],get_elements_dict:12,get_equilibrium_constant_sym:[14,17],get_kct:[14,16,17],get_ktst:[14,16,17],get_latex_str:[14,17],get_list_str:18,get_molecular_mass:[8,9,10,11],get_net_r:[14,17],get_net_rate_sym:[14,17],get_net_rates_by_sym:[14,17],get_rat:[14,17],get_rate_constant_sym:[14,17],get_rate_constants_by_sym:[14,17],get_rate_express:[14,17],get_rate_sym:[14,17],get_rates_by_sym:[14,17],get_residu:17,get_revers:[14,17],get_rxn_rates_ct:[14,16,17],get_rxn_rates_tst:[14,16,17],get_single_xrc:17,get_sites_dict:12,get_species_elements_dict:12,get_species_site_dict:12,get_species_site_list:12,get_steady_state_cvg:17,get_stoichiometry_matric:[8,9,10,11],get_subs_dict:[14,17],get_tof:[14,17],get_tof_by_sym:[14,17],get_tof_sym:[14,17],get_total_rxn_equ:[8,9,10,11,27],get_tst_barrier_from_ct:[14,16,17],getlogg:26,getstatusoutput:26,gif:22,git:20,github:[20,21],given:[0,3,14,15,17,18],good:15,gplv3:21,great:21,green:23,grid:9,group:18,guess:[6,15,17,26],gui:[21,26],hack:15,handler:[5,6],handler_typ:[5,6],has:[3,20,23,27],hashabl:3,hashabledict:3,hashablelist:3,have:[20,23,26,27],help:[5,21,23,27],here:[21,22,27],herit:16,heterogen:21,hide:24,high:15,higher:[7,14,16,17,20],hline_leng:13,hold:18,horizont:13,how:24,html:17,http:[15,17,20,21],hub:[19,25],immut:3,implement:[5,20,21],includ:[5,6,14,16,17,26],include_empty_sit:[14,17],include_pressur:[14,16,17],increas:21,index:3,indexerror:3,indic:27,industri:21,info:[14,17,26],inform:[11,18,23,24,26],inherit:14,init:17,init_cvg:[6,26],init_guess:26,initi:[5,6,12,14,15,16,17,26,27],initial_cvg:17,initial_guess:6,input:[5,6,9,23,24,26],insert:3,instal:19,instanc:12,instanti:26,instead:26,integ:3,integr:[6,17,23,26],interact:[21,26],interfac:[7,20,21,23],intermedi:[8,9,10,11,14,17],intern:0,interp_method:13,interpol:13,interv:[6,18,26],introduc:24,introduct:19,invalid:24,is_mast:26,item:3,iter:[3,6,14,17,24],iteract:6,its:[11,12,14,24],jacobian:[6,14,15,17],job:[19,25],just:[14,17,20,24,26],kct:[14,16,17],kei:[0,3,6,8,9,10,11,13,14,16,17,26],keyerror:3,keyword:15,kinet:[0,2,3,5,6,8,9,10,11,14,16,17,19,23,25],kinetic_model:[5,6],kineticmodel:[0,4,6,8,9,11,14,16,17,19],kmc:9,kmc_parser:9,kmc_process:9,kmc_site:9,kmcconfigur:9,kmclattic:9,kmclibconfigur:9,kmclibsitesmap:9,kmcparser:[4,5,19],kmcsitesmap:9,kmcsolver:5,knowledg:21,kwarg:[5,6,13,15],lack:3,larg:21,last:3,latest:21,latex:[12,14,17],latex_tup:[14,17],lattic:[1,9],lattice_data:[4,19],learn:21,left:[6,8,9,10,11,14,17,24],length:13,less:24,level:[5,6,7,20,27],licens:21,like:[3,26,27],limit:[7,15,26],line:[13,24],line_width:13,linear:[15,17],liquid:12,liquid_nam:[8,9,10,11],list:[2,3,5,6,7,8,9,10,11,12,13,14,17,18,27],list_obj:18,local:[15,21],localhost:20,log:[5,6,14,17,23,26],log_allow:6,log_latex:[14,17],logger:[5,6,26],logger_level:[5,6],look:26,low:[6,15,17],lower:21,lsoda:17,machin:20,main:[23,24,27],make:[3,21,27],make_hash:3,mani:21,mass:[0,8,9,10,11,14,16,17,27],master:7,master_onli:7,matrix:[6,8,9,10,11,14,15,17],max:[6,15,17],max_rootfinding_iter:[6,26],mdnewton:[6,15,26],mean:[14,16,17,21],mean_field_solv:[14,17],meanfieldsolv:[4,19],meet:21,memoiz:3,mep:[14,16,17],merg:7,merge_seq:7,messag:20,method:[0,2,3,6,14,15,16,17,21],micor:26,micro:[6,19,23,24,25],micro_kinetic_model:[6,26],microkinet:[17,21],microkineticmodel:[4,19,26],microsoft:20,middl:27,mikac:26,mikiac:[],mikiac_test:[],min:[18,26],mkm:[5,6,26],mkmrunscript:26,modal:24,mode:0,model:[0,2,3,4,8,9,10,11,14,16,17,19,22,25,27],model_dict:26,modelshel:[10,16],modifi:[14,17],modify_init_guess:17,modul:[1,7,18,21,26],molecul:[8,9,10,11,14,16,17,27],molecular:[0,8,9,10,11],more:[17,21,23],most:21,move:18,move_vector:18,mpfloat:15,mpi4pi:20,mpi:[7,20,26],mpich:20,mpicommon:[4,19,26],mpiutil:7,mpmath:[6,15],msg:26,must:[6,14,15,17,26,27],name:[0,2,3,5,6,8,9,10,11,12,14,17,18,23,25,26],ncol:18,need:[5,20,24],net:[14,17],net_rat:6,newton:[15,17],non:17,none:[0,3,6,8,9,12,13,14,17,18],nonlinear:[15,17],nor:6,norm:15,note:15,now:23,nsite:12,number:[3,7,12,13,17,18],numer:[6,15,17],numerial_jacobian:[14,17],numerical_represent:6,numpi:[8,9,10,11,17],o2_2:27,o2_g:[8,9,10,11,12,14,17,26,27],o_2:[8,9,10,11,12,26,27],o_2t:27,obj:[17,18],object:[3,5,6,7,9,12,14,17,18,21,27],obstacl:21,obtain:27,occurr:3,ode:17,ode_buffer_s:6,ode_output_interv:6,odeend:26,odeinterv:26,odeonli:26,odeoutput:26,old:[5,6],one:[17,21,27],onli:[7,15,26],open:[20,22,25],openmpi:20,openopt:15,oper:[10,18,22,24],opposit:[14,17],optim:[6,15,17],option:[14,17,27],order:[14,15,17,21],org:[15,17],orient:21,other:[14,16,21],otherwis:[3,15],ouptut:6,out:[3,26],output:[6,14,17,26,27],over:17,overdetermin:15,own:[0,8,9,11,14,16,17,26],owner:[0,8,9,10,11,13,14,16,17],oxid:[26,27],oxygen:27,packag:26,pair:3,panel:[22,25],parallel:7,param:[12,17],param_nam:18,paramet:[0,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,22,24,26],pars:[5,8,9,10,11,19,22,25,26],parse_configur:9,parse_data:[8,9,11,26],parse_elementary_rxn:[8,9,10,11],parse_process:9,parser:[4,5,19,21,26,27],parser_bas:[8,10,11],parserbas:[4,8,11,19],part1:[14,17],part2:[14,17],part:[14,17,27],partial:[0,24,26],particl:[14,16,17],pass:[20,26],path:26,peak:13,peak_width:13,perhap:26,perturb:[6,17],perturbation_direct:6,perturbation_s:6,pkl:[6,26],place:3,pleas:15,plot:[13,26],plot_al:13,plotter:[4,5,6,19,21,26],plotter_bas:13,plotterbas:13,point:[13,14,15,17],polish:15,pop:[3,24],popitem:3,posit:[8,9,10,11],possibl:[2,3,5,6,13,17,18,21],power:[21,27],precis:[6,15],precison:17,preliminari:26,prepar:[23,26],preprocess:6,present:[3,21],pressur:[0,14,16,17,24,26],principl:21,probabl:[14,16,17],process:[7,9,14,16,17,18,21,27],process_dict:18,processes_fil:9,processor:7,product:[6,8,9,10,11,26],product_nam:[6,26],productionnam:26,profil:[13,21,22],program:21,provid:[3,17,20,21,23,26,27],pt100:26,purpos:[14,17],put:26,python:[20,21,26,27],pytlab:[20,21],quadrat:13,queri:[8,9,10,11,12,18],quick:26,rais:[3,26,27],rang:3,rank:7,rapidli:21,rate:[5,6,14,16,17,26],rate_algo:[5,26],ration:21,reactant:[8,9,10,11],reaction:[5,6,8,9,10,11,12,13,14,16,17,19,21,22,25,26],read:[8,9,23,26],reapro_matrix:[8,9,10,11],receiv:27,reciev:17,recommend:15,recurs:20,reduct:[14,16,17],ref_energi:18,refenergi:3,refer:[3,5,17,18],reflect:[14,16,17],regex_dict:[8,9,10,11],regress:[8,9,10,11],regular:27,rel:[0,5,6,8,9,10,11,14,16,17,21,26],rel_energi:[5,6,9,11,26],relat:[1,8,9,10,11,23,24],relative_energi:[0,6,14,16,17],relative_energy_pars:[9,11],relativeenergypars:[4,5,9,19,26],remot:21,remov:3,report:[22,25],repositori:20,repres:[15,27],represent:6,research:[21,23,27],residu:[6,14,17],result:[23,26],revers:[3,6,12,14,17,23,26],reverse_rxn:27,revert:12,rfs:[14,17],right:6,road:21,robust:21,root:[6,7,15],rootfind:[6,26],rootfinding_iter:[4,19],rootfindingiter:15,row:[8,9,10,11],rrs:[14,17],rtype:17,run:[5,6,19,21,25],runserv:20,rxn:[8,9,10,11,12,27],rxn_equat:[12,13,27],rxn_express:[5,14,16,17,26,27],rxn_list:[12,14,17],rxn_parser:[4,19,27],rxnequat:[12,27],scak:[0,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,25,26],scaks_test:20,scalabl:21,scale:21,scipi:[6,15,17],screen:21,script:25,sec:[18,26],second:18,section:[24,27],see:[5,17,27],select:[21,24],self:[5,8,9,10,11,17],seq:7,sequenc:[3,7,18],serial:26,server:21,servic:21,set:[3,5,6,15,22,25,26],set_corrector:[5,6],set_logger_level:[5,6],set_plott:[5,6],set_solv:[5,6,26],setdefault:3,setup:[5,6,18,20,23,25],setup_dict:[5,6,26],setup_fil:[5,6,26],shadow:13,shadow_color:13,shadow_depth:13,shallow:3,shell:[20,26],shomat:0,shomate_correct:0,show:22,signatur:5,similar:24,simpl:26,simplest:26,simul:[9,21],singl:[17,27],single_pt:17,site:[0,5,6,8,9,10,11,12,14,16,17,26,27],site_matrix:[8,9,10,11],site_nam:[8,9,10,11,26],sitesmap:9,sitesmap_fil:9,size:[6,7,17],softwar:21,solut:15,solv:[6,15,17,19,21,22,24,25,27],solve_od:[17,26],solver:[0,4,5,6,19,26],solver_bas:[14,16],solverbas:[4,14,19],some:[3,27],sort:3,sourc:[0,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18],space:3,spacevector:3,span:17,speci:[0,3,5,6,8,9,10,11,12,14,17,18,25,26],species_definit:[5,10,18,26],species_nam:[8,9,10,11],species_sit:12,speciesdefinit:3,specif:12,specifi:[3,14,15,17],speed:17,spline:13,split:[7,12],split_seq:7,split_siz:7,squenc:18,stabl:[3,21],stagnat:[14,17],standard:[14,16,17],start:[3,15,26],state:[5,6,12,13,14,16,17,23,26,27],statu:26,steadi:[6,17,23,26],steady_state_coverag:[6,17],steady_state_error:6,steady_state_funct:17,steady_state_function_by_sym:17,steady_state_solv:[17,26],steadystatesolv:[5,17,26],steer:[14,16,17],step:[6,17],stick:[14,16,17],stoichiometri:[8,9,10,11,12],stop:[3,17],store:[1,6],str:[0,2,3,5,6,8,9,10,11,12,13,14,16,17,18],string:[3,12,14,17,18],string_rang:18,strongli:[],structur:26,sub:[7,24],submit:26,subprocess:26,substitut:[14,17],suitabl:[],sum:[14,17],support:15,sure:27,surfac:[14,17,26],symbol:[14,17],sympi:[6,14,17],sys:26,system:[15,17,21,22,25],tail:26,take:[26,27],temper:26,temperatur:[0,5,14,16,17,24,26],templat:26,test:[18,20],tex:[12,14,17],texen:12,than:24,them:21,theoret:21,theori:[5,14,16,17],therefor:20,thermo_data:[4,19],thermodynam:1,thermodynamic_corrector:0,thermodynamiccorrector:[4,5,19,26],theta:[14,17],thi:[0,3,8,9,11,14,15,16,17,21,24,27],those:[21,23,26],three:27,through:[8,9,10,11],thu:26,time:[17,18,21,26],time_end:[17,26],time_span:[17,26],time_start:17,to_formula_list:12,tof:[6,14,17,26],toler:[6,26],tolist:12,top:26,topic:21,total:[8,9,10,11,24,26,27],tradit:21,traj_output:[17,26],trajectori:[17,23,26],transit:[5,14,16,17,27],transition_state_nam:[8,9,10,11],translat:0,trivial:15,tst:[5,14,16,17],tupl:[3,8,9,10,11,13,14,15,17,18],turnov:[6,14,17,21,23,26],tutori:19,two:[24,27],type:[0,3,5,6,8,9,10,11,12,13,14,15,17,18,24,26],unconserv:27,under:21,underlin:27,unit:20,unitcel:[14,16,17],unitcell_area:26,updat:[0,3,8,9,10,11,13,14,16,17,23],upper:24,usag:26,use:[6,15,17,21,22,26,27],used:[7,14,17,24,26],user:[21,23,26],uses:23,using:[0,6,14,15,16,17,21,26,27],usual:27,util:[4,19,26],valid:[5,6,18],valu:[0,2,3,5,6,8,9,10,11,13,14,16,17,18,24],valueerror:3,var_nam:18,variabl:[3,6,18,26],vector:[3,8,9,10,11,15,18],veri:23,versa:[8,9,10,11],version:[20,21,26],vice:[8,9,10,11],view:3,visit:20,visual:[22,26],vode:17,wai:[20,26],want:24,weak:5,web:[21,23,26],welcom:[15,21],when:[2,3,17],where:23,whether:[14,16,17],which:[15,21],whose:[14,17,18],why:19,width:13,without:21,would:[14,17,18,24,27],wrap:7,wrapper:7,write:26,written:[26,27],wrt:[14,16,17],xrc:[6,17,26],xtrc:17,you:[15,20,21,23,24,26,27],your:[20,26],zvode:17},titles:["correctors.ThermodynamicCorrector","datatabase.elements_data","descriptors.component_descriptors","descriptors.descriptors","API","models.KineticModel","models.MicroKineticModel","mpicommons","parsers.AbsoluteEnergyParser","parsers.KMCParser","parsers.ParserBase","parsers.RelativeEnergyParser","parsers.rxn_parser","plotters.EnergyProfilePlotter","solvers.MeanFieldSolver","solvers.rootfinding_iterators","solvers.SolverBase","solvers.MeanFieldSolver","utilities.check_utilities","Welcome to scaks's documentation!","Installation","Introduction","[Animation] Run a job in scaks-Hub","Solve model in scaks-Hub","Build a model in scaks-Hub","Tutorial","Solve a micro-kinetic model","Parse reaction expressions"],titleterms:{"new":24,For:20,Use:26,Using:26,absoluteenergypars:8,add:24,anim:22,api:4,balanc:27,build:24,catalyst:21,catynet:[],check:[20,27],check_util:18,code:[],component_descriptor:2,conserv:27,convent:27,convet:27,coordinate_util:18,corrector:0,creat:27,datatabas:1,definit:24,descriptor:[2,3],develop:20,dictionari:26,document:19,edit:24,elementari:[24,27],elements_data:1,energi:24,energyprofileplott:13,equat:27,exampl:20,exist:[23,24],express:27,file:[23,26],format_util:18,from:20,gener:23,hub:[20,22,23,24],implement:[],instal:20,introduct:21,job:[22,23,26],kinet:[21,24,26],kineticmodel:5,kmcparser:9,lattice_data:1,local:20,meanfieldsolv:[14,17],micro:[21,26],microkineticmodel:6,mikiac:[],model:[5,6,21,23,24,26],mpicommon:7,name:27,open:23,other:[],panel:[23,24],pars:27,parser:[8,9,10,11,12],parserbas:10,pip:20,plotter:13,prerequisit:20,profil:24,reaction:[24,27],recommend:20,relativeenergypars:11,report:23,revert:27,rootfinding_iter:15,run:[20,22,23,26],rxn_parser:12,scak:[19,20,21,22,23,24,27],script:26,set:27,setup:26,solv:[23,26],solver:[14,15,16,17],solverbas:16,sourc:20,speci:27,system:23,thermo_data:1,thermodynamiccorrector:0,tutori:25,util:18,via:20,visual:24,welcom:19,why:21}})